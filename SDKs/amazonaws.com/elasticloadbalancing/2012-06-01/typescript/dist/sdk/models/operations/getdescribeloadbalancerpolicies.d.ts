import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLoadBalancerPoliciesActionEnum {
    DescribeLoadBalancerPolicies = "DescribeLoadBalancerPolicies"
}
export declare enum GetDescribeLoadBalancerPoliciesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDescribeLoadBalancerPoliciesQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancerPoliciesActionEnum;
    loadBalancerName?: string;
    policyNames?: string[];
    version: GetDescribeLoadBalancerPoliciesVersionEnum;
}
export declare class GetDescribeLoadBalancerPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoadBalancerPoliciesRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoadBalancerPoliciesQueryParams;
    headers: GetDescribeLoadBalancerPoliciesHeaders;
}
export declare class GetDescribeLoadBalancerPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
