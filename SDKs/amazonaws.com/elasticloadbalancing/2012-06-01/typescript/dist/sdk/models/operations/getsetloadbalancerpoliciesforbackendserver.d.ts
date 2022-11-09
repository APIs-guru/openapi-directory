import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}
export declare enum GetSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetSetLoadBalancerPoliciesForBackendServerQueryParams extends SpeakeasyBase {
    action: GetSetLoadBalancerPoliciesForBackendServerActionEnum;
    instancePort: number;
    loadBalancerName: string;
    policyNames: string[];
    version: GetSetLoadBalancerPoliciesForBackendServerVersionEnum;
}
export declare class GetSetLoadBalancerPoliciesForBackendServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
    queryParams: GetSetLoadBalancerPoliciesForBackendServerQueryParams;
    headers: GetSetLoadBalancerPoliciesForBackendServerHeaders;
}
export declare class GetSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
