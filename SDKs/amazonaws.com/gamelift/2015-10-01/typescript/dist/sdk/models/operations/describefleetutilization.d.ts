import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetUtilizationQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeFleetUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetUtilization = "GameLift.DescribeFleetUtilization"
}
export declare class DescribeFleetUtilizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetUtilizationXAmzTargetEnum;
}
export declare class DescribeFleetUtilizationRequest extends SpeakeasyBase {
    queryParams: DescribeFleetUtilizationQueryParams;
    headers: DescribeFleetUtilizationHeaders;
    request: shared.DescribeFleetUtilizationInput;
}
export declare class DescribeFleetUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetUtilizationOutput?: shared.DescribeFleetUtilizationOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
