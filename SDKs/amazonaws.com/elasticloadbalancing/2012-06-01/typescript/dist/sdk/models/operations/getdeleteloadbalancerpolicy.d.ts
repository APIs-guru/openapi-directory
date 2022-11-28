import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteLoadBalancerPolicyActionEnum {
    DeleteLoadBalancerPolicy = "DeleteLoadBalancerPolicy"
}
export declare enum GetDeleteLoadBalancerPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDeleteLoadBalancerPolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteLoadBalancerPolicyActionEnum;
    loadBalancerName: string;
    policyName: string;
    version: GetDeleteLoadBalancerPolicyVersionEnum;
}
export declare class GetDeleteLoadBalancerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLoadBalancerPolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteLoadBalancerPolicyQueryParams;
    headers: GetDeleteLoadBalancerPolicyHeaders;
}
export declare class GetDeleteLoadBalancerPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
