import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGameSessionDetailsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeGameSessionDetailsXAmzTargetEnum {
    GameLiftDescribeGameSessionDetails = "GameLift.DescribeGameSessionDetails"
}
export declare class DescribeGameSessionDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionDetailsXAmzTargetEnum;
}
export declare class DescribeGameSessionDetailsRequest extends SpeakeasyBase {
    queryParams: DescribeGameSessionDetailsQueryParams;
    headers: DescribeGameSessionDetailsHeaders;
    request: shared.DescribeGameSessionDetailsInput;
}
export declare class DescribeGameSessionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    describeGameSessionDetailsOutput?: shared.DescribeGameSessionDetailsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
