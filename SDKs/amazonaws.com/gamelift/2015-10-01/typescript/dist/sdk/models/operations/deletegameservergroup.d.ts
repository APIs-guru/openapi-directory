import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGameServerGroupXAmzTargetEnum {
    GameLiftDeleteGameServerGroup = "GameLift.DeleteGameServerGroup"
}
export declare class DeleteGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGameServerGroupXAmzTargetEnum;
}
export declare class DeleteGameServerGroupRequest extends SpeakeasyBase {
    headers: DeleteGameServerGroupHeaders;
    request: shared.DeleteGameServerGroupInput;
}
export declare class DeleteGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteGameServerGroupOutput?: shared.DeleteGameServerGroupOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
