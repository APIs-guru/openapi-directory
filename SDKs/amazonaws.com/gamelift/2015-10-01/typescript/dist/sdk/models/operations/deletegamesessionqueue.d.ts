import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGameSessionQueueXAmzTargetEnum {
    GameLiftDeleteGameSessionQueue = "GameLift.DeleteGameSessionQueue"
}
export declare class DeleteGameSessionQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGameSessionQueueXAmzTargetEnum;
}
export declare class DeleteGameSessionQueueRequest extends SpeakeasyBase {
    headers: DeleteGameSessionQueueHeaders;
    request: shared.DeleteGameSessionQueueInput;
}
export declare class DeleteGameSessionQueueResponse extends SpeakeasyBase {
    contentType: string;
    deleteGameSessionQueueOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
