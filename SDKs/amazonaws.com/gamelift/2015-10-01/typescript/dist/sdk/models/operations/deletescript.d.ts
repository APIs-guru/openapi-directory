import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteScriptXAmzTargetEnum {
    GameLiftDeleteScript = "GameLift.DeleteScript"
}
export declare class DeleteScriptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScriptXAmzTargetEnum;
}
export declare class DeleteScriptRequest extends SpeakeasyBase {
    headers: DeleteScriptHeaders;
    request: shared.DeleteScriptInput;
}
export declare class DeleteScriptResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
