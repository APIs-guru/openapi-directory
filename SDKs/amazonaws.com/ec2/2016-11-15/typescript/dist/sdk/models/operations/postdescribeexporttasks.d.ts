import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeExportTasksActionEnum {
    DescribeExportTasks = "DescribeExportTasks"
}
export declare enum PostDescribeExportTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeExportTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeExportTasksActionEnum;
    version: PostDescribeExportTasksVersionEnum;
}
export declare class PostDescribeExportTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeExportTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeExportTasksQueryParams;
    headers: PostDescribeExportTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeExportTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
