import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationFeedbackSummary } from "./recommendationfeedbacksummary";
export declare class ListRecommendationFeedbackResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
}
