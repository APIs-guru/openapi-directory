import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationRelatedAnomalyResource } from "./recommendationrelatedanomalyresource";
import { RecommendationRelatedAnomalySourceDetail } from "./recommendationrelatedanomalysourcedetail";



// RecommendationRelatedAnomaly
/** 
 *  Information about an anomaly that is related to a recommendation. 
**/
export class RecommendationRelatedAnomaly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: RecommendationRelatedAnomalyResource })
  resources?: RecommendationRelatedAnomalyResource[];

  @SpeakeasyMetadata({ data: "json, name=SourceDetails", elemType: RecommendationRelatedAnomalySourceDetail })
  sourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}
