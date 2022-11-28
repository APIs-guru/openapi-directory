import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetCapacityQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeFleetCapacityXAmzTargetEnum {
    GameLiftDescribeFleetCapacity = "GameLift.DescribeFleetCapacity"
}
export declare class DescribeFleetCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetCapacityXAmzTargetEnum;
}
export declare class DescribeFleetCapacityRequest extends SpeakeasyBase {
    queryParams: DescribeFleetCapacityQueryParams;
    headers: DescribeFleetCapacityHeaders;
    request: shared.DescribeFleetCapacityInput;
}
export declare class DescribeFleetCapacityResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetCapacityOutput?: shared.DescribeFleetCapacityOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
