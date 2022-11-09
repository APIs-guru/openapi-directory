import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationRelatedEventResource } from "./recommendationrelatedeventresource";


// RecommendationRelatedEvent
/** 
 *  Information about an event that is related to a recommendation. 
**/
export class RecommendationRelatedEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Resources", elemType: shared.RecommendationRelatedEventResource })
  resources?: RecommendationRelatedEventResource[];
}
