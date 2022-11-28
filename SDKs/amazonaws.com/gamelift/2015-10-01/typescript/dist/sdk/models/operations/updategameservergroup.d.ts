import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGameServerGroupXAmzTargetEnum {
    GameLiftUpdateGameServerGroup = "GameLift.UpdateGameServerGroup"
}
export declare class UpdateGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameServerGroupXAmzTargetEnum;
}
export declare class UpdateGameServerGroupRequest extends SpeakeasyBase {
    headers: UpdateGameServerGroupHeaders;
    request: shared.UpdateGameServerGroupInput;
}
export declare class UpdateGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateGameServerGroupOutput?: shared.UpdateGameServerGroupOutput;
}
