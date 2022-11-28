import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeLoadBalancerTargetGroupsActionEnum {
    DescribeLoadBalancerTargetGroups = "DescribeLoadBalancerTargetGroups"
}
export declare enum GetDescribeLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancerTargetGroupsActionEnum;
    autoScalingGroupName: string;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeLoadBalancerTargetGroupsVersionEnum;
}
export declare class GetDescribeLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoadBalancerTargetGroupsQueryParams;
    headers: GetDescribeLoadBalancerTargetGroupsHeaders;
}
export declare class GetDescribeLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
