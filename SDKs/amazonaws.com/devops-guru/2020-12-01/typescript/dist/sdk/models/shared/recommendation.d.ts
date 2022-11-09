import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationRelatedAnomaly } from "./recommendationrelatedanomaly";
import { RecommendationRelatedEvent } from "./recommendationrelatedevent";
/**
 *  Recommendation information to help you remediate detected anomalous behavior that generated an insight.
**/
export declare class Recommendation extends SpeakeasyBase {
    description?: string;
    link?: string;
    name?: string;
    reason?: string;
    relatedAnomalies?: RecommendationRelatedAnomaly[];
    relatedEvents?: RecommendationRelatedEvent[];
}
