import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTargetGroupsActionEnum {
    DescribeTargetGroups = "DescribeTargetGroups"
}
export declare enum PostDescribeTargetGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeTargetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeTargetGroupsActionEnum;
    marker?: string;
    version: PostDescribeTargetGroupsVersionEnum;
}
export declare class PostDescribeTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTargetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTargetGroupsQueryParams;
    headers: PostDescribeTargetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
