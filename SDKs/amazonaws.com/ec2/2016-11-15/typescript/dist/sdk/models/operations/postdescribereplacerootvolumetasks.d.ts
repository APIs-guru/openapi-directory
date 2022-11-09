import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReplaceRootVolumeTasksActionEnum {
    DescribeReplaceRootVolumeTasks = "DescribeReplaceRootVolumeTasks"
}
export declare enum PostDescribeReplaceRootVolumeTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeReplaceRootVolumeTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeReplaceRootVolumeTasksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeReplaceRootVolumeTasksVersionEnum;
}
export declare class PostDescribeReplaceRootVolumeTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReplaceRootVolumeTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeReplaceRootVolumeTasksQueryParams;
    headers: PostDescribeReplaceRootVolumeTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReplaceRootVolumeTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
