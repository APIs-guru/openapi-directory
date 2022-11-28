import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeScalingPlansXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlans = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"
}
export declare class DescribeScalingPlansHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingPlansXAmzTargetEnum;
}
export declare class DescribeScalingPlansRequest extends SpeakeasyBase {
    headers: DescribeScalingPlansHeaders;
    request: shared.DescribeScalingPlansRequest;
}
export declare class DescribeScalingPlansResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScalingPlansResponse?: shared.DescribeScalingPlansResponse;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
