import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMatchmakingXAmzTargetEnum {
    GameLiftStartMatchmaking = "GameLift.StartMatchmaking"
}
export declare class StartMatchmakingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMatchmakingXAmzTargetEnum;
}
export declare class StartMatchmakingRequest extends SpeakeasyBase {
    headers: StartMatchmakingHeaders;
    request: shared.StartMatchmakingInput;
}
export declare class StartMatchmakingResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    startMatchmakingOutput?: shared.StartMatchmakingOutput;
    statusCode: number;
    unsupportedRegionException?: any;
}
