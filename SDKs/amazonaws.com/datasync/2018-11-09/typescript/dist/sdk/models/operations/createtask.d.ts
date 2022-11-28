import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTaskXAmzTargetEnum {
    FmrsServiceCreateTask = "FmrsService.CreateTask"
}
export declare class CreateTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTaskXAmzTargetEnum;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    headers: CreateTaskHeaders;
    request: shared.CreateTaskRequest;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    createTaskResponse?: shared.CreateTaskResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
