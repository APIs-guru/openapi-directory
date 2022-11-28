import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTaskXAmzTargetEnum {
    FmrsServiceDeleteTask = "FmrsService.DeleteTask"
}
export declare class DeleteTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTaskXAmzTargetEnum;
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    headers: DeleteTaskHeaders;
    request: shared.DeleteTaskRequest;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    deleteTaskResponse?: Map<string, any>;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
