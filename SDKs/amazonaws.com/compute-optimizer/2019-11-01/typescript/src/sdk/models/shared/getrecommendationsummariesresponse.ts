import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationSummary } from "./recommendationsummary";


export class GetRecommendationSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recommendationSummaries", elemType: shared.RecommendationSummary })
  recommendationSummaries?: RecommendationSummary[];
}
