import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMatchmakingConfigurationsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeMatchmakingConfigurationsXAmzTargetEnum {
    GameLiftDescribeMatchmakingConfigurations = "GameLift.DescribeMatchmakingConfigurations"
}
export declare class DescribeMatchmakingConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMatchmakingConfigurationsXAmzTargetEnum;
}
export declare class DescribeMatchmakingConfigurationsRequest extends SpeakeasyBase {
    queryParams: DescribeMatchmakingConfigurationsQueryParams;
    headers: DescribeMatchmakingConfigurationsHeaders;
    request: shared.DescribeMatchmakingConfigurationsInput;
}
export declare class DescribeMatchmakingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    describeMatchmakingConfigurationsOutput?: shared.DescribeMatchmakingConfigurationsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
}
