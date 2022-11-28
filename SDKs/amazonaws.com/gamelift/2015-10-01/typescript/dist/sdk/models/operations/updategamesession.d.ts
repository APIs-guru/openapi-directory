import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGameSessionXAmzTargetEnum {
    GameLiftUpdateGameSession = "GameLift.UpdateGameSession"
}
export declare class UpdateGameSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameSessionXAmzTargetEnum;
}
export declare class UpdateGameSessionRequest extends SpeakeasyBase {
    headers: UpdateGameSessionHeaders;
    request: shared.UpdateGameSessionInput;
}
export declare class UpdateGameSessionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidGameSessionStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateGameSessionOutput?: shared.UpdateGameSessionOutput;
}
