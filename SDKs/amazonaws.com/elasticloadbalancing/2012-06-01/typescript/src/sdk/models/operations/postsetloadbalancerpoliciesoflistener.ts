import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}

export enum PostSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetLoadBalancerPoliciesOfListenerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetLoadBalancerPoliciesOfListenerVersionEnum;
}


export class PostSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
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


export class PostSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetLoadBalancerPoliciesOfListenerQueryParams;

  @Metadata()
  headers: PostSetLoadBalancerPoliciesOfListenerHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
