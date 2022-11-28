import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterGameServerXAmzTargetEnum {
    GameLiftRegisterGameServer = "GameLift.RegisterGameServer"
}
export declare class RegisterGameServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterGameServerXAmzTargetEnum;
}
export declare class RegisterGameServerRequest extends SpeakeasyBase {
    headers: RegisterGameServerHeaders;
    request: shared.RegisterGameServerInput;
}
export declare class RegisterGameServerResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    registerGameServerOutput?: shared.RegisterGameServerOutput;
    statusCode: number;
    unauthorizedException?: any;
}
