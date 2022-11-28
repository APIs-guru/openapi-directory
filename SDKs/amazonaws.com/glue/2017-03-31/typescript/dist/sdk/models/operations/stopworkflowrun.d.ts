import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopWorkflowRunXAmzTargetEnum {
    AwsGlueStopWorkflowRun = "AWSGlue.StopWorkflowRun"
}
export declare class StopWorkflowRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopWorkflowRunXAmzTargetEnum;
}
export declare class StopWorkflowRunRequest extends SpeakeasyBase {
    headers: StopWorkflowRunHeaders;
    request: shared.StopWorkflowRunRequest;
}
export declare class StopWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    illegalWorkflowStateException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    stopWorkflowRunResponse?: Map<string, any>;
}
