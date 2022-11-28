import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}

export enum GetSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerPoliciesForBackendServerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerPoliciesForBackendServerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstancePort" })
  instancePort: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerPoliciesForBackendServerVersionEnum;
}


export class GetSetLoadBalancerPoliciesForBackendServerHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetLoadBalancerPoliciesForBackendServerQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetLoadBalancerPoliciesForBackendServerHeaders;
}


export class GetSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
