import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGameSessionQueueXAmzTargetEnum {
    GameLiftUpdateGameSessionQueue = "GameLift.UpdateGameSessionQueue"
}
export declare class UpdateGameSessionQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameSessionQueueXAmzTargetEnum;
}
export declare class UpdateGameSessionQueueRequest extends SpeakeasyBase {
    headers: UpdateGameSessionQueueHeaders;
    request: shared.UpdateGameSessionQueueInput;
}
export declare class UpdateGameSessionQueueResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateGameSessionQueueOutput?: shared.UpdateGameSessionQueueOutput;
}
