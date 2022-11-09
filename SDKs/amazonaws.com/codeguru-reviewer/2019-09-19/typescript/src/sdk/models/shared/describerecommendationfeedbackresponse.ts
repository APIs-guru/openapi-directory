import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationFeedback } from "./recommendationfeedback";


export class DescribeRecommendationFeedbackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecommendationFeedback" })
  recommendationFeedback?: RecommendationFeedback;
}
