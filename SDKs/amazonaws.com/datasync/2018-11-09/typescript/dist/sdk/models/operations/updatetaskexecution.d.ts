import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTaskExecutionXAmzTargetEnum {
    FmrsServiceUpdateTaskExecution = "FmrsService.UpdateTaskExecution"
}
export declare class UpdateTaskExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskExecutionXAmzTargetEnum;
}
export declare class UpdateTaskExecutionRequest extends SpeakeasyBase {
    headers: UpdateTaskExecutionHeaders;
    request: shared.UpdateTaskExecutionRequest;
}
export declare class UpdateTaskExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateTaskExecutionResponse?: Map<string, any>;
}
