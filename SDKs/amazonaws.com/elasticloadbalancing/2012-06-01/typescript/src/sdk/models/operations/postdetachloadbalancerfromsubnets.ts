import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}

export enum PostDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostDetachLoadBalancerFromSubnetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDetachLoadBalancerFromSubnetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDetachLoadBalancerFromSubnetsVersionEnum;
}


export class PostDetachLoadBalancerFromSubnetsHeaders extends SpeakeasyBase {
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


export class PostDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDetachLoadBalancerFromSubnetsQueryParams;

  @Metadata()
  headers: PostDetachLoadBalancerFromSubnetsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
