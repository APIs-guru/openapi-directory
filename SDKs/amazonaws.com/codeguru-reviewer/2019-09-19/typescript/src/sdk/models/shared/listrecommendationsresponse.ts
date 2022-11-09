import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationSummary } from "./recommendationsummary";


export class ListRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RecommendationSummaries", elemType: shared.RecommendationSummary })
  recommendationSummaries?: RecommendationSummary[];
}
