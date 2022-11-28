import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeFpgaImageAttributeActionEnum {
    DescribeFpgaImageAttribute = "DescribeFpgaImageAttribute"
}

export enum GetDescribeFpgaImageAttributeAttributeEnum {
    Description = "description",
    Name = "name",
    LoadPermission = "loadPermission",
    ProductCodes = "productCodes"
}

export enum GetDescribeFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeFpgaImageAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeFpgaImageAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetDescribeFpgaImageAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FpgaImageId" })
  fpgaImageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeFpgaImageAttributeVersionEnum;
}


export class GetDescribeFpgaImageAttributeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDescribeFpgaImageAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeFpgaImageAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeFpgaImageAttributeHeaders;
}


export class GetDescribeFpgaImageAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
