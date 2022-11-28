import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGameSessionLogUrlXAmzTargetEnum {
    GameLiftGetGameSessionLogUrl = "GameLift.GetGameSessionLogUrl"
}
export declare class GetGameSessionLogUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGameSessionLogUrlXAmzTargetEnum;
}
export declare class GetGameSessionLogUrlRequest extends SpeakeasyBase {
    headers: GetGameSessionLogUrlHeaders;
    request: shared.GetGameSessionLogUrlInput;
}
export declare class GetGameSessionLogUrlResponse extends SpeakeasyBase {
    contentType: string;
    getGameSessionLogUrlOutput?: shared.GetGameSessionLogUrlOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
