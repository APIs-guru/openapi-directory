import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationRelatedEventResource } from "./recommendationrelatedeventresource";



// RecommendationRelatedEvent
/** 
 *  Information about an event that is related to a recommendation. 
**/
export class RecommendationRelatedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: RecommendationRelatedEventResource })
  resources?: RecommendationRelatedEventResource[];
}
