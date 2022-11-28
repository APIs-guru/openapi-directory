import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRecommendationExportJobsXAmzTargetEnum {
    ComputeOptimizerServiceDescribeRecommendationExportJobs = "ComputeOptimizerService.DescribeRecommendationExportJobs"
}
export declare class DescribeRecommendationExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecommendationExportJobsXAmzTargetEnum;
}
export declare class DescribeRecommendationExportJobsRequest extends SpeakeasyBase {
    headers: DescribeRecommendationExportJobsHeaders;
    request: shared.DescribeRecommendationExportJobsRequest;
}
export declare class DescribeRecommendationExportJobsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeRecommendationExportJobsResponse?: shared.DescribeRecommendationExportJobsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
