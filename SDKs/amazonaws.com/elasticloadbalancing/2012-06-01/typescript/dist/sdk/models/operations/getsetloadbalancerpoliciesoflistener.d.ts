import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}
export declare enum GetSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
    action: GetSetLoadBalancerPoliciesOfListenerActionEnum;
    loadBalancerName: string;
    loadBalancerPort: number;
    policyNames: string[];
    version: GetSetLoadBalancerPoliciesOfListenerVersionEnum;
}
export declare class GetSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
    queryParams: GetSetLoadBalancerPoliciesOfListenerQueryParams;
    headers: GetSetLoadBalancerPoliciesOfListenerHeaders;
}
export declare class GetSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
