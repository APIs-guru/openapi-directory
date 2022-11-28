import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRecommendationFeedbackPathParams extends SpeakeasyBase {
    codeReviewArn: string;
}
export declare class ListRecommendationFeedbackQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    recommendationIds?: string[];
    userIds?: string[];
}
export declare class ListRecommendationFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecommendationFeedbackRequest extends SpeakeasyBase {
    pathParams: ListRecommendationFeedbackPathParams;
    queryParams: ListRecommendationFeedbackQueryParams;
    headers: ListRecommendationFeedbackHeaders;
}
export declare class ListRecommendationFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRecommendationFeedbackResponse?: shared.ListRecommendationFeedbackResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
