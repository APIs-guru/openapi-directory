import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopFleetActionsXAmzTargetEnum {
    GameLiftStopFleetActions = "GameLift.StopFleetActions"
}
export declare class StopFleetActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopFleetActionsXAmzTargetEnum;
}
export declare class StopFleetActionsRequest extends SpeakeasyBase {
    headers: StopFleetActionsHeaders;
    request: shared.StopFleetActionsInput;
}
export declare class StopFleetActionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    stopFleetActionsOutput?: shared.StopFleetActionsOutput;
    unauthorizedException?: any;
}
