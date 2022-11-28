import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMatchmakingRuleSetsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeMatchmakingRuleSetsXAmzTargetEnum {
    GameLiftDescribeMatchmakingRuleSets = "GameLift.DescribeMatchmakingRuleSets"
}
export declare class DescribeMatchmakingRuleSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMatchmakingRuleSetsXAmzTargetEnum;
}
export declare class DescribeMatchmakingRuleSetsRequest extends SpeakeasyBase {
    queryParams: DescribeMatchmakingRuleSetsQueryParams;
    headers: DescribeMatchmakingRuleSetsHeaders;
    request: shared.DescribeMatchmakingRuleSetsInput;
}
export declare class DescribeMatchmakingRuleSetsResponse extends SpeakeasyBase {
    contentType: string;
    describeMatchmakingRuleSetsOutput?: shared.DescribeMatchmakingRuleSetsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
}
