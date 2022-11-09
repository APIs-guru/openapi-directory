import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationFeedbackSummary } from "./recommendationfeedbacksummary";


export class ListRecommendationFeedbackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RecommendationFeedbackSummaries", elemType: shared.RecommendationFeedbackSummary })
  recommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
}
