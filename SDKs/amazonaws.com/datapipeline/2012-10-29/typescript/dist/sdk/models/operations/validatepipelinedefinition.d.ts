import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ValidatePipelineDefinitionXAmzTargetEnum {
    DataPipelineValidatePipelineDefinition = "DataPipeline.ValidatePipelineDefinition"
}
export declare class ValidatePipelineDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidatePipelineDefinitionXAmzTargetEnum;
}
export declare class ValidatePipelineDefinitionRequest extends SpeakeasyBase {
    headers: ValidatePipelineDefinitionHeaders;
    request: shared.ValidatePipelineDefinitionInput;
}
export declare class ValidatePipelineDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
    validatePipelineDefinitionOutput?: shared.ValidatePipelineDefinitionOutput;
}
