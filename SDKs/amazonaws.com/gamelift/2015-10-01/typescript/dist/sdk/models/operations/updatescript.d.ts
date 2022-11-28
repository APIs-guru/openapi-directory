import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateScriptXAmzTargetEnum {
    GameLiftUpdateScript = "GameLift.UpdateScript"
}
export declare class UpdateScriptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateScriptXAmzTargetEnum;
}
export declare class UpdateScriptRequest extends SpeakeasyBase {
    headers: UpdateScriptHeaders;
    request: shared.UpdateScriptInput;
}
export declare class UpdateScriptResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateScriptOutput?: shared.UpdateScriptOutput;
}
