import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}

export enum PostUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostUnassignIpv6AddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUnassignIpv6AddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUnassignIpv6AddressesVersionEnum;
}


export class PostUnassignIpv6AddressesHeaders extends SpeakeasyBase {
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


export class PostUnassignIpv6AddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUnassignIpv6AddressesQueryParams;

  @SpeakeasyMetadata()
  headers: PostUnassignIpv6AddressesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUnassignIpv6AddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
