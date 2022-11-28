import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeScalingActivitiesActionEnum {
    DescribeScalingActivities = "DescribeScalingActivities"
}
export declare enum GetDescribeScalingActivitiesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeScalingActivitiesQueryParams extends SpeakeasyBase {
    action: GetDescribeScalingActivitiesActionEnum;
    activityIds?: string[];
    autoScalingGroupName?: string;
    includeDeletedGroups?: boolean;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeScalingActivitiesVersionEnum;
}
export declare class GetDescribeScalingActivitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeScalingActivitiesRequest extends SpeakeasyBase {
    queryParams: GetDescribeScalingActivitiesQueryParams;
    headers: GetDescribeScalingActivitiesHeaders;
}
export declare class GetDescribeScalingActivitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
