import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePlayerSessionsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribePlayerSessionsXAmzTargetEnum {
    GameLiftDescribePlayerSessions = "GameLift.DescribePlayerSessions"
}
export declare class DescribePlayerSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePlayerSessionsXAmzTargetEnum;
}
export declare class DescribePlayerSessionsRequest extends SpeakeasyBase {
    queryParams: DescribePlayerSessionsQueryParams;
    headers: DescribePlayerSessionsHeaders;
    request: shared.DescribePlayerSessionsInput;
}
export declare class DescribePlayerSessionsResponse extends SpeakeasyBase {
    contentType: string;
    describePlayerSessionsOutput?: shared.DescribePlayerSessionsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
