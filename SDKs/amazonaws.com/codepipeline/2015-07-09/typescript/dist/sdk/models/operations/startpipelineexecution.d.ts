import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StartPipelineExecution = "CodePipeline_20150709.StartPipelineExecution"
}
export declare class StartPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPipelineExecutionXAmzTargetEnum;
}
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    headers: StartPipelineExecutionHeaders;
    request: shared.StartPipelineExecutionInput;
}
export declare class StartPipelineExecutionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    pipelineNotFoundException?: any;
    startPipelineExecutionOutput?: shared.StartPipelineExecutionOutput;
    statusCode: number;
    validationException?: any;
}
