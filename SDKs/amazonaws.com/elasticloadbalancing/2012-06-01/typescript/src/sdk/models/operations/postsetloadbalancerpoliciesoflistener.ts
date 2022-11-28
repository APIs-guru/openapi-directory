import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}

export enum PostSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetLoadBalancerPoliciesOfListenerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetLoadBalancerPoliciesOfListenerVersionEnum;
}


export class PostSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
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


export class PostSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetLoadBalancerPoliciesOfListenerQueryParams;

  @SpeakeasyMetadata()
  headers: PostSetLoadBalancerPoliciesOfListenerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
