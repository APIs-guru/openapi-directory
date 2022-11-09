import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeactivatePipelineXAmzTargetEnum {
    DataPipelineDeactivatePipeline = "DataPipeline.DeactivatePipeline"
}
export declare class DeactivatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeactivatePipelineXAmzTargetEnum;
}
export declare class DeactivatePipelineRequest extends SpeakeasyBase {
    headers: DeactivatePipelineHeaders;
    request: shared.DeactivatePipelineInput;
}
export declare class DeactivatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    deactivatePipelineOutput?: Map<string, any>;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
