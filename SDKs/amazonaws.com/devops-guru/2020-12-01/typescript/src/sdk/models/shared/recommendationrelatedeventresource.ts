import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecommendationRelatedEventResource
/** 
 *  Information about an AWS resource that emitted and event that is related to a recommendation in an insight. 
**/
export class RecommendationRelatedEventResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
