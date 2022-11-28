import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeMatchmakingXAmzTargetEnum {
    GameLiftDescribeMatchmaking = "GameLift.DescribeMatchmaking"
}
export declare class DescribeMatchmakingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMatchmakingXAmzTargetEnum;
}
export declare class DescribeMatchmakingRequest extends SpeakeasyBase {
    headers: DescribeMatchmakingHeaders;
    request: shared.DescribeMatchmakingInput;
}
export declare class DescribeMatchmakingResponse extends SpeakeasyBase {
    contentType: string;
    describeMatchmakingOutput?: shared.DescribeMatchmakingOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
}
