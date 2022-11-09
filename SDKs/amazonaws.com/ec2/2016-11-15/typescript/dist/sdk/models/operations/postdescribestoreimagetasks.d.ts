import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeStoreImageTasksActionEnum {
    DescribeStoreImageTasks = "DescribeStoreImageTasks"
}
export declare enum PostDescribeStoreImageTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeStoreImageTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeStoreImageTasksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeStoreImageTasksVersionEnum;
}
export declare class PostDescribeStoreImageTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeStoreImageTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeStoreImageTasksQueryParams;
    headers: PostDescribeStoreImageTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeStoreImageTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
