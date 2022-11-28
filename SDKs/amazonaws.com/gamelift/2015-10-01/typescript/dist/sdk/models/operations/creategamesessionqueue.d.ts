import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGameSessionQueueXAmzTargetEnum {
    GameLiftCreateGameSessionQueue = "GameLift.CreateGameSessionQueue"
}
export declare class CreateGameSessionQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGameSessionQueueXAmzTargetEnum;
}
export declare class CreateGameSessionQueueRequest extends SpeakeasyBase {
    headers: CreateGameSessionQueueHeaders;
    request: shared.CreateGameSessionQueueInput;
}
export declare class CreateGameSessionQueueResponse extends SpeakeasyBase {
    contentType: string;
    createGameSessionQueueOutput?: shared.CreateGameSessionQueueOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
