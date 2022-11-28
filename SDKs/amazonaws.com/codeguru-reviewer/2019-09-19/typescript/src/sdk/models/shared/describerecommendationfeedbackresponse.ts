import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationFeedback } from "./recommendationfeedback";



export class DescribeRecommendationFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecommendationFeedback" })
  recommendationFeedback?: RecommendationFeedback;
}
