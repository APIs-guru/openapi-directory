import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";


export class GetEc2InstanceRecommendationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=instanceArns" })
  instanceArns?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;
}
