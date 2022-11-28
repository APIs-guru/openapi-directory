import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationFeedbackSummary } from "./recommendationfeedbacksummary";



export class ListRecommendationFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationFeedbackSummaries", elemType: RecommendationFeedbackSummary })
  recommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
}
