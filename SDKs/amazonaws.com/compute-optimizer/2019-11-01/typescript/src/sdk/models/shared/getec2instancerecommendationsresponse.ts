import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetRecommendationError } from "./getrecommendationerror";
import { InstanceRecommendation } from "./instancerecommendation";


export class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.GetRecommendationError })
  errors?: GetRecommendationError[];

  @Metadata({ data: "json, name=instanceRecommendations", elemType: shared.InstanceRecommendation })
  instanceRecommendations?: InstanceRecommendation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
