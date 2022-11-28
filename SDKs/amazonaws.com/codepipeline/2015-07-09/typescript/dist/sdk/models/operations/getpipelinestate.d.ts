import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPipelineStateXAmzTargetEnum {
    CodePipeline20150709GetPipelineState = "CodePipeline_20150709.GetPipelineState"
}
export declare class GetPipelineStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineStateXAmzTargetEnum;
}
export declare class GetPipelineStateRequest extends SpeakeasyBase {
    headers: GetPipelineStateHeaders;
    request: shared.GetPipelineStateInput;
}
export declare class GetPipelineStateResponse extends SpeakeasyBase {
    contentType: string;
    getPipelineStateOutput?: shared.GetPipelineStateOutput;
    pipelineNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
