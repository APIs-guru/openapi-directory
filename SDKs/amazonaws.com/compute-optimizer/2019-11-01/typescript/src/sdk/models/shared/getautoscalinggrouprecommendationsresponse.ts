import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroupRecommendation } from "./autoscalinggrouprecommendation";
import { GetRecommendationError } from "./getrecommendationerror";


export class GetAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroupRecommendations", elemType: shared.AutoScalingGroupRecommendation })
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  @Metadata({ data: "json, name=errors", elemType: shared.GetRecommendationError })
  errors?: GetRecommendationError[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
