import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartGameSessionPlacementXAmzTargetEnum {
    GameLiftStartGameSessionPlacement = "GameLift.StartGameSessionPlacement"
}
export declare class StartGameSessionPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartGameSessionPlacementXAmzTargetEnum;
}
export declare class StartGameSessionPlacementRequest extends SpeakeasyBase {
    headers: StartGameSessionPlacementHeaders;
    request: shared.StartGameSessionPlacementInput;
}
export declare class StartGameSessionPlacementResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    startGameSessionPlacementOutput?: shared.StartGameSessionPlacementOutput;
    statusCode: number;
    unauthorizedException?: any;
}
