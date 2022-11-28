import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFleetLocationCapacityXAmzTargetEnum {
    GameLiftDescribeFleetLocationCapacity = "GameLift.DescribeFleetLocationCapacity"
}
export declare class DescribeFleetLocationCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetLocationCapacityXAmzTargetEnum;
}
export declare class DescribeFleetLocationCapacityRequest extends SpeakeasyBase {
    headers: DescribeFleetLocationCapacityHeaders;
    request: shared.DescribeFleetLocationCapacityInput;
}
export declare class DescribeFleetLocationCapacityResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetLocationCapacityOutput?: shared.DescribeFleetLocationCapacityOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
