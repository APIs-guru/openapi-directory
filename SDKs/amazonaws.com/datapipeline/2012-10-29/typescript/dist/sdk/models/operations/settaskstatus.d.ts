import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetTaskStatusXAmzTargetEnum {
    DataPipelineSetTaskStatus = "DataPipeline.SetTaskStatus"
}
export declare class SetTaskStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTaskStatusXAmzTargetEnum;
}
export declare class SetTaskStatusRequest extends SpeakeasyBase {
    headers: SetTaskStatusHeaders;
    request: shared.SetTaskStatusInput;
}
export declare class SetTaskStatusResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    setTaskStatusOutput?: Map<string, any>;
    statusCode: number;
    taskNotFoundException?: any;
}
