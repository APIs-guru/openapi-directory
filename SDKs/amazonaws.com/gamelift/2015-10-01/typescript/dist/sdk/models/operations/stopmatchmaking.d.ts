import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopMatchmakingXAmzTargetEnum {
    GameLiftStopMatchmaking = "GameLift.StopMatchmaking"
}
export declare class StopMatchmakingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopMatchmakingXAmzTargetEnum;
}
export declare class StopMatchmakingRequest extends SpeakeasyBase {
    headers: StopMatchmakingHeaders;
    request: shared.StopMatchmakingInput;
}
export declare class StopMatchmakingResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    stopMatchmakingOutput?: Map<string, any>;
    unsupportedRegionException?: any;
}
