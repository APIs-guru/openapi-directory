import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationRelatedAnomalyResource } from "./recommendationrelatedanomalyresource";
import { RecommendationRelatedAnomalySourceDetail } from "./recommendationrelatedanomalysourcedetail";


// RecommendationRelatedAnomaly
/** 
 *  Information about an anomaly that is related to a recommendation. 
**/
export class RecommendationRelatedAnomaly extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.RecommendationRelatedAnomalyResource })
  resources?: RecommendationRelatedAnomalyResource[];

  @Metadata({ data: "json, name=SourceDetails", elemType: shared.RecommendationRelatedAnomalySourceDetail })
  sourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}
