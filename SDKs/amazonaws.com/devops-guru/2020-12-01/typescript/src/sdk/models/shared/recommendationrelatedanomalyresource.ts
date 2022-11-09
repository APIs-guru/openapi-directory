import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecommendationRelatedAnomalyResource
/** 
 *  Information about a resource in which DevOps Guru detected anomalous behavior. 
**/
export class RecommendationRelatedAnomalyResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
