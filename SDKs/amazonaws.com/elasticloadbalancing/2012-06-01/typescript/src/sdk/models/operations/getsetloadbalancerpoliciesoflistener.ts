import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}

export enum GetSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerPoliciesOfListenerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPort" })
  loadBalancerPort: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerPoliciesOfListenerVersionEnum;
}


export class GetSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetLoadBalancerPoliciesOfListenerQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetLoadBalancerPoliciesOfListenerHeaders;
}


export class GetSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
