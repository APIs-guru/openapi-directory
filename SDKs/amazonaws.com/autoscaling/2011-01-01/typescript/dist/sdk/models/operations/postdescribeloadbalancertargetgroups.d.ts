import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLoadBalancerTargetGroupsActionEnum {
    DescribeLoadBalancerTargetGroups = "DescribeLoadBalancerTargetGroups"
}
export declare enum PostDescribeLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeLoadBalancerTargetGroupsActionEnum;
    version: PostDescribeLoadBalancerTargetGroupsVersionEnum;
}
export declare class PostDescribeLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoadBalancerTargetGroupsQueryParams;
    headers: PostDescribeLoadBalancerTargetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
