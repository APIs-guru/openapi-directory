import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}

export enum GetSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerPoliciesOfListenerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPort" })
  loadBalancerPort: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerPoliciesOfListenerVersionEnum;
}


export class GetSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetLoadBalancerPoliciesOfListenerQueryParams;

  @Metadata()
  headers: GetSetLoadBalancerPoliciesOfListenerHeaders;
}


export class GetSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
