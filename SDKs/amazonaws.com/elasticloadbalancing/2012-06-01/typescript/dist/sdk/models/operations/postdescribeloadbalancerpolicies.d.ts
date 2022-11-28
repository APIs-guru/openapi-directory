import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLoadBalancerPoliciesActionEnum {
    DescribeLoadBalancerPolicies = "DescribeLoadBalancerPolicies"
}
export declare enum PostDescribeLoadBalancerPoliciesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDescribeLoadBalancerPoliciesQueryParams extends SpeakeasyBase {
    action: PostDescribeLoadBalancerPoliciesActionEnum;
    version: PostDescribeLoadBalancerPoliciesVersionEnum;
}
export declare class PostDescribeLoadBalancerPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoadBalancerPoliciesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoadBalancerPoliciesQueryParams;
    headers: PostDescribeLoadBalancerPoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoadBalancerPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
