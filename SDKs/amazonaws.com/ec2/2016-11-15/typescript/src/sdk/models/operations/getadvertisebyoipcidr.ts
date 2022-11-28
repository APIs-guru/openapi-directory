import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAdvertiseByoipCidrActionEnum {
    AdvertiseByoipCidr = "AdvertiseByoipCidr"
}

export enum GetAdvertiseByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAdvertiseByoipCidrQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAdvertiseByoipCidrActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Cidr" })
  cidr: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAdvertiseByoipCidrVersionEnum;
}


export class GetAdvertiseByoipCidrHeaders extends SpeakeasyBase {
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


export class GetAdvertiseByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAdvertiseByoipCidrQueryParams;

  @SpeakeasyMetadata()
  headers: GetAdvertiseByoipCidrHeaders;
}


export class GetAdvertiseByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
