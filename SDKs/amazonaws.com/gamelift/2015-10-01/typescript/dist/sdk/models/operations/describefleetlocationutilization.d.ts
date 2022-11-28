import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFleetLocationUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetLocationUtilization = "GameLift.DescribeFleetLocationUtilization"
}
export declare class DescribeFleetLocationUtilizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetLocationUtilizationXAmzTargetEnum;
}
export declare class DescribeFleetLocationUtilizationRequest extends SpeakeasyBase {
    headers: DescribeFleetLocationUtilizationHeaders;
    request: shared.DescribeFleetLocationUtilizationInput;
}
export declare class DescribeFleetLocationUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetLocationUtilizationOutput?: shared.DescribeFleetLocationUtilizationOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
