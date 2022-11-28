import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";



export class GetAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupArns" })
  autoScalingGroupArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;
}
