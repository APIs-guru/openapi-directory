import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptMatchXAmzTargetEnum {
    GameLiftAcceptMatch = "GameLift.AcceptMatch"
}
export declare class AcceptMatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptMatchXAmzTargetEnum;
}
export declare class AcceptMatchRequest extends SpeakeasyBase {
    headers: AcceptMatchHeaders;
    request: shared.AcceptMatchInput;
}
export declare class AcceptMatchResponse extends SpeakeasyBase {
    acceptMatchOutput?: Map<string, any>;
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
}
