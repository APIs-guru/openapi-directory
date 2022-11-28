import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchGameSessionsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum SearchGameSessionsXAmzTargetEnum {
    GameLiftSearchGameSessions = "GameLift.SearchGameSessions"
}
export declare class SearchGameSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchGameSessionsXAmzTargetEnum;
}
export declare class SearchGameSessionsRequest extends SpeakeasyBase {
    queryParams: SearchGameSessionsQueryParams;
    headers: SearchGameSessionsHeaders;
    request: shared.SearchGameSessionsInput;
}
export declare class SearchGameSessionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    searchGameSessionsOutput?: shared.SearchGameSessionsOutput;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
