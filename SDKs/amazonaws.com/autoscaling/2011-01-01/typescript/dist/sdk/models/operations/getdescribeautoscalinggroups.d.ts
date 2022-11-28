import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAutoScalingGroupsActionEnum {
    DescribeAutoScalingGroups = "DescribeAutoScalingGroups"
}
export declare enum GetDescribeAutoScalingGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeAutoScalingGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeAutoScalingGroupsActionEnum;
    autoScalingGroupNames?: string[];
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeAutoScalingGroupsVersionEnum;
}
export declare class GetDescribeAutoScalingGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAutoScalingGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeAutoScalingGroupsQueryParams;
    headers: GetDescribeAutoScalingGroupsHeaders;
}
export declare class GetDescribeAutoScalingGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
