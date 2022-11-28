import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationRelatedAnomaly } from "./recommendationrelatedanomaly";
import { RecommendationRelatedEvent } from "./recommendationrelatedevent";



// Recommendation
/** 
 *  Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
**/
export class Recommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=RelatedAnomalies", elemType: RecommendationRelatedAnomaly })
  relatedAnomalies?: RecommendationRelatedAnomaly[];

  @SpeakeasyMetadata({ data: "json, name=RelatedEvents", elemType: RecommendationRelatedEvent })
  relatedEvents?: RecommendationRelatedEvent[];
}
