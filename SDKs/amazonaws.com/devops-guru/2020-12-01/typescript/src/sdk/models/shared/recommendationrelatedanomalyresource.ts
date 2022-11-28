import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecommendationRelatedAnomalyResource
/** 
 *  Information about a resource in which DevOps Guru detected anomalous behavior. 
**/
export class RecommendationRelatedAnomalyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
