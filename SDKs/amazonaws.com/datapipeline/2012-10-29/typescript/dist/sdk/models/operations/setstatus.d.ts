import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SetStatusXAmzTargetEnum {
    DataPipelineSetStatus = "DataPipeline.SetStatus"
}
export declare class SetStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetStatusXAmzTargetEnum;
}
export declare class SetStatusRequest extends SpeakeasyBase {
    headers: SetStatusHeaders;
    request: shared.SetStatusInput;
}
export declare class SetStatusResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
