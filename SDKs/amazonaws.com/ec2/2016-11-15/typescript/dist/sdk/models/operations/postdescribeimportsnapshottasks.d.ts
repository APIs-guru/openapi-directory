import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeImportSnapshotTasksActionEnum {
    DescribeImportSnapshotTasks = "DescribeImportSnapshotTasks"
}
export declare enum PostDescribeImportSnapshotTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeImportSnapshotTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeImportSnapshotTasksActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeImportSnapshotTasksVersionEnum;
}
export declare class PostDescribeImportSnapshotTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeImportSnapshotTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeImportSnapshotTasksQueryParams;
    headers: PostDescribeImportSnapshotTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeImportSnapshotTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
