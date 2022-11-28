import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopGameSessionPlacementXAmzTargetEnum {
    GameLiftStopGameSessionPlacement = "GameLift.StopGameSessionPlacement"
}
export declare class StopGameSessionPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopGameSessionPlacementXAmzTargetEnum;
}
export declare class StopGameSessionPlacementRequest extends SpeakeasyBase {
    headers: StopGameSessionPlacementHeaders;
    request: shared.StopGameSessionPlacementInput;
}
export declare class StopGameSessionPlacementResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    stopGameSessionPlacementOutput?: shared.StopGameSessionPlacementOutput;
    unauthorizedException?: any;
}
