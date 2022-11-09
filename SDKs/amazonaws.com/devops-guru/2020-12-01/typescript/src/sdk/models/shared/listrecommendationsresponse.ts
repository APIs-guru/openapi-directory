import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Recommendation } from "./recommendation";


export class ListRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Recommendations", elemType: shared.Recommendation })
  recommendations?: Recommendation[];
}
