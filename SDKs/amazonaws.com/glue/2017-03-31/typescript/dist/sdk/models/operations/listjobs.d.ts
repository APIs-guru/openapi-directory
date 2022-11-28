import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListJobsXAmzTargetEnum {
    AwsGlueListJobs = "AWSGlue.ListJobs"
}
export declare class ListJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListJobsXAmzTargetEnum;
}
export declare class ListJobsRequest extends SpeakeasyBase {
    queryParams: ListJobsQueryParams;
    headers: ListJobsHeaders;
    request: shared.ListJobsRequest;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listJobsResponse?: shared.ListJobsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
