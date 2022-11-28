import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}

export enum PostUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostUnassignPrivateIpAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUnassignPrivateIpAddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUnassignPrivateIpAddressesVersionEnum;
}


export class PostUnassignPrivateIpAddressesHeaders extends SpeakeasyBase {
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


export class PostUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUnassignPrivateIpAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: PostUnassignPrivateIpAddressesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
