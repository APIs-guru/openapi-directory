import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGameSessionsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeGameSessionsXAmzTargetEnum {
    GameLiftDescribeGameSessions = "GameLift.DescribeGameSessions"
}
export declare class DescribeGameSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionsXAmzTargetEnum;
}
export declare class DescribeGameSessionsRequest extends SpeakeasyBase {
    queryParams: DescribeGameSessionsQueryParams;
    headers: DescribeGameSessionsHeaders;
    request: shared.DescribeGameSessionsInput;
}
export declare class DescribeGameSessionsResponse extends SpeakeasyBase {
    contentType: string;
    describeGameSessionsOutput?: shared.DescribeGameSessionsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
