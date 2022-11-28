import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePlayerSessionXAmzTargetEnum {
    GameLiftCreatePlayerSession = "GameLift.CreatePlayerSession"
}
export declare class CreatePlayerSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePlayerSessionXAmzTargetEnum;
}
export declare class CreatePlayerSessionRequest extends SpeakeasyBase {
    headers: CreatePlayerSessionHeaders;
    request: shared.CreatePlayerSessionInput;
}
export declare class CreatePlayerSessionResponse extends SpeakeasyBase {
    contentType: string;
    createPlayerSessionOutput?: shared.CreatePlayerSessionOutput;
    gameSessionFullException?: any;
    internalServiceException?: any;
    invalidGameSessionStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
