import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRecommendationFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutRecommendationFeedbackRequestBody extends SpeakeasyBase {
    codeReviewArn: string;
    reactions: shared.ReactionEnum[];
    recommendationId: string;
}
export declare class PutRecommendationFeedbackRequest extends SpeakeasyBase {
    headers: PutRecommendationFeedbackHeaders;
    request: PutRecommendationFeedbackRequestBody;
}
export declare class PutRecommendationFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    putRecommendationFeedbackResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
