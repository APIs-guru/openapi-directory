import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPipelineExecutionXAmzTargetEnum {
    CodePipeline20150709GetPipelineExecution = "CodePipeline_20150709.GetPipelineExecution"
}
export declare class GetPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineExecutionXAmzTargetEnum;
}
export declare class GetPipelineExecutionRequest extends SpeakeasyBase {
    headers: GetPipelineExecutionHeaders;
    request: shared.GetPipelineExecutionInput;
}
export declare class GetPipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    getPipelineExecutionOutput?: shared.GetPipelineExecutionOutput;
    pipelineExecutionNotFoundException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
