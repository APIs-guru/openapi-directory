import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGameSessionPlacementXAmzTargetEnum {
    GameLiftDescribeGameSessionPlacement = "GameLift.DescribeGameSessionPlacement"
}
export declare class DescribeGameSessionPlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionPlacementXAmzTargetEnum;
}
export declare class DescribeGameSessionPlacementRequest extends SpeakeasyBase {
    headers: DescribeGameSessionPlacementHeaders;
    request: shared.DescribeGameSessionPlacementInput;
}
export declare class DescribeGameSessionPlacementResponse extends SpeakeasyBase {
    contentType: string;
    describeGameSessionPlacementOutput?: shared.DescribeGameSessionPlacementOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
