import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterGameServerXAmzTargetEnum {
    GameLiftDeregisterGameServer = "GameLift.DeregisterGameServer"
}
export declare class DeregisterGameServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterGameServerXAmzTargetEnum;
}
export declare class DeregisterGameServerRequest extends SpeakeasyBase {
    headers: DeregisterGameServerHeaders;
    request: shared.DeregisterGameServerInput;
}
export declare class DeregisterGameServerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
