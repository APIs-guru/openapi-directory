import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetRecommendationError } from "./getrecommendationerror";
import { InstanceRecommendation } from "./instancerecommendation";



export class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetRecommendationError })
  errors?: GetRecommendationError[];

  @SpeakeasyMetadata({ data: "json, name=instanceRecommendations", elemType: InstanceRecommendation })
  instanceRecommendations?: InstanceRecommendation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
