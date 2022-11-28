import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeleteLoadBalancerListenersActionEnum {
    DeleteLoadBalancerListeners = "DeleteLoadBalancerListeners"
}

export enum PostDeleteLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostDeleteLoadBalancerListenersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteLoadBalancerListenersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteLoadBalancerListenersVersionEnum;
}


export class PostDeleteLoadBalancerListenersHeaders extends SpeakeasyBase {
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


export class PostDeleteLoadBalancerListenersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeleteLoadBalancerListenersQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeleteLoadBalancerListenersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteLoadBalancerListenersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
