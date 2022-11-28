import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDataRepositoryTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeDataRepositoryTasksXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeDataRepositoryTasks = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks"
}
export declare class DescribeDataRepositoryTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataRepositoryTasksXAmzTargetEnum;
}
export declare class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
    queryParams: DescribeDataRepositoryTasksQueryParams;
    headers: DescribeDataRepositoryTasksHeaders;
    request: shared.DescribeDataRepositoryTasksRequest;
}
export declare class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    dataRepositoryTaskNotFound?: any;
    describeDataRepositoryTasksResponse?: shared.DescribeDataRepositoryTasksResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
