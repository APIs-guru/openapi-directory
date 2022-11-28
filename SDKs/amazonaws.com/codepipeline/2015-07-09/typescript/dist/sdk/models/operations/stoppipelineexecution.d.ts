import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709StopPipelineExecution = "CodePipeline_20150709.StopPipelineExecution"
}
export declare class StopPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPipelineExecutionXAmzTargetEnum;
}
export declare class StopPipelineExecutionRequest extends SpeakeasyBase {
    headers: StopPipelineExecutionHeaders;
    request: shared.StopPipelineExecutionInput;
}
export declare class StopPipelineExecutionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    duplicatedStopRequestException?: any;
    pipelineExecutionNotStoppableException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
    stopPipelineExecutionOutput?: shared.StopPipelineExecutionOutput;
    validationException?: any;
}
