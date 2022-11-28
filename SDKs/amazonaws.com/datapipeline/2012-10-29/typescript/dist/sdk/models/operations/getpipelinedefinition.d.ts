import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPipelineDefinitionXAmzTargetEnum {
    DataPipelineGetPipelineDefinition = "DataPipeline.GetPipelineDefinition"
}
export declare class GetPipelineDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPipelineDefinitionXAmzTargetEnum;
}
export declare class GetPipelineDefinitionRequest extends SpeakeasyBase {
    headers: GetPipelineDefinitionHeaders;
    request: shared.GetPipelineDefinitionInput;
}
export declare class GetPipelineDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    getPipelineDefinitionOutput?: shared.GetPipelineDefinitionOutput;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
