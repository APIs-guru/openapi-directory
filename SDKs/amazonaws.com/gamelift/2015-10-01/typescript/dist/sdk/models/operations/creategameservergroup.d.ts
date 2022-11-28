import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGameServerGroupXAmzTargetEnum {
    GameLiftCreateGameServerGroup = "GameLift.CreateGameServerGroup"
}
export declare class CreateGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGameServerGroupXAmzTargetEnum;
}
export declare class CreateGameServerGroupRequest extends SpeakeasyBase {
    headers: CreateGameServerGroupHeaders;
    request: shared.CreateGameServerGroupInput;
}
export declare class CreateGameServerGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createGameServerGroupOutput?: shared.CreateGameServerGroupOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
