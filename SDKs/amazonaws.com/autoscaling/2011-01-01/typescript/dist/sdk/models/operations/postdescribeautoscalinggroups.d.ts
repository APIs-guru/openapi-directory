import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAutoScalingGroupsActionEnum {
    DescribeAutoScalingGroups = "DescribeAutoScalingGroups"
}
export declare enum PostDescribeAutoScalingGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeAutoScalingGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeAutoScalingGroupsActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeAutoScalingGroupsVersionEnum;
}
export declare class PostDescribeAutoScalingGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAutoScalingGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeAutoScalingGroupsQueryParams;
    headers: PostDescribeAutoScalingGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAutoScalingGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
