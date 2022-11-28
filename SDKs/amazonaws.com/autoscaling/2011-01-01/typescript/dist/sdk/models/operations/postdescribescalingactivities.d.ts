import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeScalingActivitiesActionEnum {
    DescribeScalingActivities = "DescribeScalingActivities"
}
export declare enum PostDescribeScalingActivitiesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeScalingActivitiesQueryParams extends SpeakeasyBase {
    action: PostDescribeScalingActivitiesActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeScalingActivitiesVersionEnum;
}
export declare class PostDescribeScalingActivitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScalingActivitiesRequest extends SpeakeasyBase {
    queryParams: PostDescribeScalingActivitiesQueryParams;
    headers: PostDescribeScalingActivitiesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeScalingActivitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
