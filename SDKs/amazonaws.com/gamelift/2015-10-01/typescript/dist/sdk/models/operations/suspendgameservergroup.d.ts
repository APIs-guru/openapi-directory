import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SuspendGameServerGroupXAmzTargetEnum {
    GameLiftSuspendGameServerGroup = "GameLift.SuspendGameServerGroup"
}
export declare class SuspendGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SuspendGameServerGroupXAmzTargetEnum;
}
export declare class SuspendGameServerGroupRequest extends SpeakeasyBase {
    headers: SuspendGameServerGroupHeaders;
    request: shared.SuspendGameServerGroupInput;
}
export declare class SuspendGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    suspendGameServerGroupOutput?: shared.SuspendGameServerGroupOutput;
    unauthorizedException?: any;
}
