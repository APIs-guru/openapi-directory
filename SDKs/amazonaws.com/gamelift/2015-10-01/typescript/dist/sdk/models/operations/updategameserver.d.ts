import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGameServerXAmzTargetEnum {
    GameLiftUpdateGameServer = "GameLift.UpdateGameServer"
}
export declare class UpdateGameServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameServerXAmzTargetEnum;
}
export declare class UpdateGameServerRequest extends SpeakeasyBase {
    headers: UpdateGameServerHeaders;
    request: shared.UpdateGameServerInput;
}
export declare class UpdateGameServerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateGameServerOutput?: shared.UpdateGameServerOutput;
}
