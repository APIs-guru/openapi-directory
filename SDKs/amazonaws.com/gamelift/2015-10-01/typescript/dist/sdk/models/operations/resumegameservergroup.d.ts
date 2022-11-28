import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResumeGameServerGroupXAmzTargetEnum {
    GameLiftResumeGameServerGroup = "GameLift.ResumeGameServerGroup"
}
export declare class ResumeGameServerGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeGameServerGroupXAmzTargetEnum;
}
export declare class ResumeGameServerGroupRequest extends SpeakeasyBase {
    headers: ResumeGameServerGroupHeaders;
    request: shared.ResumeGameServerGroupInput;
}
export declare class ResumeGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    resumeGameServerGroupOutput?: shared.ResumeGameServerGroupOutput;
    statusCode: number;
    unauthorizedException?: any;
}
