import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWorkflowRunXAmzTargetEnum {
    AwsGlueGetWorkflowRun = "AWSGlue.GetWorkflowRun"
}
export declare class GetWorkflowRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowRunXAmzTargetEnum;
}
export declare class GetWorkflowRunRequest extends SpeakeasyBase {
    headers: GetWorkflowRunHeaders;
    request: shared.GetWorkflowRunRequest;
}
export declare class GetWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getWorkflowRunResponse?: shared.GetWorkflowRunResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
