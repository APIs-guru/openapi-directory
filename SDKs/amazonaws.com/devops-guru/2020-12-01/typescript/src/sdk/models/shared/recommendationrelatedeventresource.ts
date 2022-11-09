import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecommendationRelatedEventResource
/** 
 *  Information about an AWS resource that emitted and event that is related to a recommendation in an insight. 
**/
export class RecommendationRelatedEventResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
