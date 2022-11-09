import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}

export enum PostSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostSetLoadBalancerPoliciesForBackendServerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetLoadBalancerPoliciesForBackendServerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetLoadBalancerPoliciesForBackendServerVersionEnum;
}


export class PostSetLoadBalancerPoliciesForBackendServerHeaders extends SpeakeasyBase {
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


export class PostSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetLoadBalancerPoliciesForBackendServerQueryParams;

  @Metadata()
  headers: PostSetLoadBalancerPoliciesForBackendServerHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
