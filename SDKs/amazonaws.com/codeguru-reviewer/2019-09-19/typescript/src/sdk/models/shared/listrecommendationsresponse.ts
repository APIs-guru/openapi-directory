import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSummary } from "./recommendationsummary";



export class ListRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationSummaries", elemType: RecommendationSummary })
  recommendationSummaries?: RecommendationSummary[];
}
