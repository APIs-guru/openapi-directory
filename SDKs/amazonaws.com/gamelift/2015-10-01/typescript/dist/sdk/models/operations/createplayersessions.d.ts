import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePlayerSessionsXAmzTargetEnum {
    GameLiftCreatePlayerSessions = "GameLift.CreatePlayerSessions"
}
export declare class CreatePlayerSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePlayerSessionsXAmzTargetEnum;
}
export declare class CreatePlayerSessionsRequest extends SpeakeasyBase {
    headers: CreatePlayerSessionsHeaders;
    request: shared.CreatePlayerSessionsInput;
}
export declare class CreatePlayerSessionsResponse extends SpeakeasyBase {
    contentType: string;
    createPlayerSessionsOutput?: shared.CreatePlayerSessionsOutput;
    gameSessionFullException?: any;
    internalServiceException?: any;
    invalidGameSessionStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
