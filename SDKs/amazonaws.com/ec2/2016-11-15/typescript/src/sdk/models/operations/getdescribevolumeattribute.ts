import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeVolumeAttributeActionEnum {
    DescribeVolumeAttribute = "DescribeVolumeAttribute"
}

export enum GetDescribeVolumeAttributeAttributeEnum {
    AutoEnableIo = "autoEnableIO",
    ProductCodes = "productCodes"
}

export enum GetDescribeVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeVolumeAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeVolumeAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetDescribeVolumeAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeVolumeAttributeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;
}


export class GetDescribeVolumeAttributeHeaders extends SpeakeasyBase {
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


export class GetDescribeVolumeAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeVolumeAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeVolumeAttributeHeaders;
}


export class GetDescribeVolumeAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
