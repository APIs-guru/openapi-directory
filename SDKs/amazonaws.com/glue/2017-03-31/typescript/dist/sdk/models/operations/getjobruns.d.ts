import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetJobRunsXAmzTargetEnum {
    AwsGlueGetJobRuns = "AWSGlue.GetJobRuns"
}
export declare class GetJobRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobRunsXAmzTargetEnum;
}
export declare class GetJobRunsRequest extends SpeakeasyBase {
    queryParams: GetJobRunsQueryParams;
    headers: GetJobRunsHeaders;
    request: shared.GetJobRunsRequest;
}
export declare class GetJobRunsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getJobRunsResponse?: shared.GetJobRunsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
