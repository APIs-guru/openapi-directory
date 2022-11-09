import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutPipelineDefinitionXAmzTargetEnum {
    DataPipelinePutPipelineDefinition = "DataPipeline.PutPipelineDefinition"
}
export declare class PutPipelineDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPipelineDefinitionXAmzTargetEnum;
}
export declare class PutPipelineDefinitionRequest extends SpeakeasyBase {
    headers: PutPipelineDefinitionHeaders;
    request: shared.PutPipelineDefinitionInput;
}
export declare class PutPipelineDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    putPipelineDefinitionOutput?: shared.PutPipelineDefinitionOutput;
    statusCode: number;
}
