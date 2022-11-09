import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}

export enum GetSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetSetLoadBalancerPoliciesForBackendServerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetLoadBalancerPoliciesForBackendServerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstancePort" })
  instancePort: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetLoadBalancerPoliciesForBackendServerVersionEnum;
}


export class GetSetLoadBalancerPoliciesForBackendServerHeaders extends SpeakeasyBase {
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


export class GetSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetLoadBalancerPoliciesForBackendServerQueryParams;

  @Metadata()
  headers: GetSetLoadBalancerPoliciesForBackendServerHeaders;
}


export class GetSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
