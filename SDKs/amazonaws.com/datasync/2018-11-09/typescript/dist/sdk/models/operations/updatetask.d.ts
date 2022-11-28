import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTaskXAmzTargetEnum {
    FmrsServiceUpdateTask = "FmrsService.UpdateTask"
}
export declare class UpdateTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskXAmzTargetEnum;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    headers: UpdateTaskHeaders;
    request: shared.UpdateTaskRequest;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateTaskResponse?: Map<string, any>;
}
