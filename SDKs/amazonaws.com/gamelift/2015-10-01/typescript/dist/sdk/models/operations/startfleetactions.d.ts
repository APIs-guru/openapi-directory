import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFleetActionsXAmzTargetEnum {
    GameLiftStartFleetActions = "GameLift.StartFleetActions"
}
export declare class StartFleetActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFleetActionsXAmzTargetEnum;
}
export declare class StartFleetActionsRequest extends SpeakeasyBase {
    headers: StartFleetActionsHeaders;
    request: shared.StartFleetActionsInput;
}
export declare class StartFleetActionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    startFleetActionsOutput?: shared.StartFleetActionsOutput;
    statusCode: number;
    unauthorizedException?: any;
}
