import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRecommendationFeedbackPathParams extends SpeakeasyBase {
    codeReviewArn: string;
}
export declare class DescribeRecommendationFeedbackQueryParams extends SpeakeasyBase {
    recommendationId: string;
    userId?: string;
}
export declare class DescribeRecommendationFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRecommendationFeedbackRequest extends SpeakeasyBase {
    pathParams: DescribeRecommendationFeedbackPathParams;
    queryParams: DescribeRecommendationFeedbackQueryParams;
    headers: DescribeRecommendationFeedbackHeaders;
}
export declare class DescribeRecommendationFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeRecommendationFeedbackResponse?: shared.DescribeRecommendationFeedbackResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
