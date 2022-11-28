import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetJobsXAmzTargetEnum {
    AwsGlueGetJobs = "AWSGlue.GetJobs"
}
export declare class GetJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobsXAmzTargetEnum;
}
export declare class GetJobsRequest extends SpeakeasyBase {
    queryParams: GetJobsQueryParams;
    headers: GetJobsHeaders;
    request: shared.GetJobsRequest;
}
export declare class GetJobsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getJobsResponse?: shared.GetJobsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
