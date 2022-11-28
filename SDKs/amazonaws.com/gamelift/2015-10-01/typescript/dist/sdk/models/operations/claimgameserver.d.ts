import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ClaimGameServerXAmzTargetEnum {
    GameLiftClaimGameServer = "GameLift.ClaimGameServer"
}
export declare class ClaimGameServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ClaimGameServerXAmzTargetEnum;
}
export declare class ClaimGameServerRequest extends SpeakeasyBase {
    headers: ClaimGameServerHeaders;
    request: shared.ClaimGameServerInput;
}
export declare class ClaimGameServerResponse extends SpeakeasyBase {
    claimGameServerOutput?: shared.ClaimGameServerOutput;
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    outOfCapacityException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
