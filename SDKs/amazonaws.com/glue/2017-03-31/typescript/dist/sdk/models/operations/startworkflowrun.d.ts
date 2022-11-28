import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartWorkflowRunXAmzTargetEnum {
    AwsGlueStartWorkflowRun = "AWSGlue.StartWorkflowRun"
}
export declare class StartWorkflowRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkflowRunXAmzTargetEnum;
}
export declare class StartWorkflowRunRequest extends SpeakeasyBase {
    headers: StartWorkflowRunHeaders;
    request: shared.StartWorkflowRunRequest;
}
export declare class StartWorkflowRunResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    startWorkflowRunResponse?: shared.StartWorkflowRunResponse;
    statusCode: number;
}
