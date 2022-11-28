import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSummary } from "./recommendationsummary";



export class GetRecommendationSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationSummaries", elemType: RecommendationSummary })
  recommendationSummaries?: RecommendationSummary[];
}
