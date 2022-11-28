import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupRecommendation } from "./autoscalinggrouprecommendation";
import { GetRecommendationError } from "./getrecommendationerror";



export class GetAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupRecommendations", elemType: AutoScalingGroupRecommendation })
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetRecommendationError })
  errors?: GetRecommendationError[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
