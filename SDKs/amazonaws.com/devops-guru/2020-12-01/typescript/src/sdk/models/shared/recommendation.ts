import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationRelatedAnomaly } from "./recommendationrelatedanomaly";
import { RecommendationRelatedEvent } from "./recommendationrelatedevent";


// Recommendation
/** 
 *  Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
**/
export class Recommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Link" })
  link?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;

  @Metadata({ data: "json, name=RelatedAnomalies", elemType: shared.RecommendationRelatedAnomaly })
  relatedAnomalies?: RecommendationRelatedAnomaly[];

  @Metadata({ data: "json, name=RelatedEvents", elemType: shared.RecommendationRelatedEvent })
  relatedEvents?: RecommendationRelatedEvent[];
}
