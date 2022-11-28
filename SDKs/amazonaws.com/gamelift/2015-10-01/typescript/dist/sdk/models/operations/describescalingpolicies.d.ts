import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScalingPoliciesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeScalingPoliciesXAmzTargetEnum {
    GameLiftDescribeScalingPolicies = "GameLift.DescribeScalingPolicies"
}
export declare class DescribeScalingPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingPoliciesXAmzTargetEnum;
}
export declare class DescribeScalingPoliciesRequest extends SpeakeasyBase {
    queryParams: DescribeScalingPoliciesQueryParams;
    headers: DescribeScalingPoliciesHeaders;
    request: shared.DescribeScalingPoliciesInput;
}
export declare class DescribeScalingPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    describeScalingPoliciesOutput?: shared.DescribeScalingPoliciesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
