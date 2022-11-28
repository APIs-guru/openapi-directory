import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}

export enum PostDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostDetachLoadBalancerFromSubnetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDetachLoadBalancerFromSubnetsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDetachLoadBalancerFromSubnetsVersionEnum;
}


export class PostDetachLoadBalancerFromSubnetsHeaders extends SpeakeasyBase {
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


export class PostDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDetachLoadBalancerFromSubnetsQueryParams;

  @SpeakeasyMetadata()
  headers: PostDetachLoadBalancerFromSubnetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
