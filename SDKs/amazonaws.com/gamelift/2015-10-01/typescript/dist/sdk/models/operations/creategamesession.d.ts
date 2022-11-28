import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGameSessionXAmzTargetEnum {
    GameLiftCreateGameSession = "GameLift.CreateGameSession"
}
export declare class CreateGameSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGameSessionXAmzTargetEnum;
}
export declare class CreateGameSessionRequest extends SpeakeasyBase {
    headers: CreateGameSessionHeaders;
    request: shared.CreateGameSessionInput;
}
export declare class CreateGameSessionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createGameSessionOutput?: shared.CreateGameSessionOutput;
    fleetCapacityExceededException?: any;
    idempotentParameterMismatchException?: any;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
