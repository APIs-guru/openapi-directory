import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeImportImageTasksActionEnum {
    DescribeImportImageTasks = "DescribeImportImageTasks"
}
export declare enum PostDescribeImportImageTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeImportImageTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeImportImageTasksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeImportImageTasksVersionEnum;
}
export declare class PostDescribeImportImageTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeImportImageTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeImportImageTasksQueryParams;
    headers: PostDescribeImportImageTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeImportImageTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
