import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}

export enum PostAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAssignIpv6AddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssignIpv6AddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssignIpv6AddressesVersionEnum;
}


export class PostAssignIpv6AddressesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostAssignIpv6AddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAssignIpv6AddressesQueryParams;

  @Metadata()
  headers: PostAssignIpv6AddressesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssignIpv6AddressesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
