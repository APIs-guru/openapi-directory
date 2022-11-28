import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ActivatePipelineXAmzTargetEnum {
    DataPipelineActivatePipeline = "DataPipeline.ActivatePipeline"
}
export declare class ActivatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ActivatePipelineXAmzTargetEnum;
}
export declare class ActivatePipelineRequest extends SpeakeasyBase {
    headers: ActivatePipelineHeaders;
    request: shared.ActivatePipelineInput;
}
export declare class ActivatePipelineResponse extends SpeakeasyBase {
    activatePipelineOutput?: Map<string, any>;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
