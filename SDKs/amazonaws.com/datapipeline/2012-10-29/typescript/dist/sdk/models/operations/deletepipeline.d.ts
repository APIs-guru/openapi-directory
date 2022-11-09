import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeletePipelineXAmzTargetEnum {
    DataPipelineDeletePipeline = "DataPipeline.DeletePipeline"
}
export declare class DeletePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePipelineXAmzTargetEnum;
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    headers: DeletePipelineHeaders;
    request: shared.DeletePipelineInput;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
