import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScalingPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeScalingPoliciesXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalingPolicies = "AnyScaleFrontendService.DescribeScalingPolicies"
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
    request: shared.DescribeScalingPoliciesRequest;
}
export declare class DescribeScalingPoliciesResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScalingPoliciesResponse?: shared.DescribeScalingPoliciesResponse;
    failedResourceAccessException?: any;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
