import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostApplySecurityGroupsToLoadBalancerActionEnum {
    ApplySecurityGroupsToLoadBalancer = "ApplySecurityGroupsToLoadBalancer"
}

export enum PostApplySecurityGroupsToLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostApplySecurityGroupsToLoadBalancerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostApplySecurityGroupsToLoadBalancerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostApplySecurityGroupsToLoadBalancerVersionEnum;
}


export class PostApplySecurityGroupsToLoadBalancerHeaders extends SpeakeasyBase {
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


export class PostApplySecurityGroupsToLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApplySecurityGroupsToLoadBalancerQueryParams;

  @SpeakeasyMetadata()
  headers: PostApplySecurityGroupsToLoadBalancerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostApplySecurityGroupsToLoadBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
