import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeScalingPlanResourcesXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
}
export declare class DescribeScalingPlanResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingPlanResourcesXAmzTargetEnum;
}
export declare class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
    headers: DescribeScalingPlanResourcesHeaders;
    request: shared.DescribeScalingPlanResourcesRequest;
}
export declare class DescribeScalingPlanResourcesResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScalingPlanResourcesResponse?: shared.DescribeScalingPlanResourcesResponse;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
