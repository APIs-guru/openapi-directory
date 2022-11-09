import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationRelatedAnomalyResource } from "./recommendationrelatedanomalyresource";
import { RecommendationRelatedAnomalySourceDetail } from "./recommendationrelatedanomalysourcedetail";
/**
 *  Information about an anomaly that is related to a recommendation.
**/
export declare class RecommendationRelatedAnomaly extends SpeakeasyBase {
    resources?: RecommendationRelatedAnomalyResource[];
    sourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}
