import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetryStageExecutionXAmzTargetEnum {
    CodePipeline20150709RetryStageExecution = "CodePipeline_20150709.RetryStageExecution"
}
export declare class RetryStageExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryStageExecutionXAmzTargetEnum;
}
export declare class RetryStageExecutionRequest extends SpeakeasyBase {
    headers: RetryStageExecutionHeaders;
    request: shared.RetryStageExecutionInput;
}
export declare class RetryStageExecutionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    notLatestPipelineExecutionException?: any;
    pipelineNotFoundException?: any;
    retryStageExecutionOutput?: shared.RetryStageExecutionOutput;
    stageNotFoundException?: any;
    stageNotRetryableException?: any;
    statusCode: number;
    validationException?: any;
}
