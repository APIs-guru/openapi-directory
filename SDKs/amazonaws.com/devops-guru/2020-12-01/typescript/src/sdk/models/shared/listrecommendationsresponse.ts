import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";



export class ListRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Recommendations", elemType: Recommendation })
  recommendations?: Recommendation[];
}
