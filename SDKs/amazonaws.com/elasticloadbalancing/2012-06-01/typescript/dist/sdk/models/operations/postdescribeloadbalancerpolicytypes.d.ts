import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLoadBalancerPolicyTypesActionEnum {
    DescribeLoadBalancerPolicyTypes = "DescribeLoadBalancerPolicyTypes"
}
export declare enum PostDescribeLoadBalancerPolicyTypesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDescribeLoadBalancerPolicyTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeLoadBalancerPolicyTypesActionEnum;
    version: PostDescribeLoadBalancerPolicyTypesVersionEnum;
}
export declare class PostDescribeLoadBalancerPolicyTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoadBalancerPolicyTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoadBalancerPolicyTypesQueryParams;
    headers: PostDescribeLoadBalancerPolicyTypesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoadBalancerPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
