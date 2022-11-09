import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeExportImageTasksActionEnum {
    DescribeExportImageTasks = "DescribeExportImageTasks"
}
export declare enum PostDescribeExportImageTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeExportImageTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeExportImageTasksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeExportImageTasksVersionEnum;
}
export declare class PostDescribeExportImageTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeExportImageTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeExportImageTasksQueryParams;
    headers: PostDescribeExportImageTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeExportImageTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
