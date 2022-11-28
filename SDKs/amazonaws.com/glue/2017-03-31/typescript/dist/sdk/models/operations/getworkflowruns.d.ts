import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetWorkflowRunsXAmzTargetEnum {
    AwsGlueGetWorkflowRuns = "AWSGlue.GetWorkflowRuns"
}
export declare class GetWorkflowRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowRunsXAmzTargetEnum;
}
export declare class GetWorkflowRunsRequest extends SpeakeasyBase {
    queryParams: GetWorkflowRunsQueryParams;
    headers: GetWorkflowRunsHeaders;
    request: shared.GetWorkflowRunsRequest;
}
export declare class GetWorkflowRunsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getWorkflowRunsResponse?: shared.GetWorkflowRunsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
