import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationRelatedEventResource } from "./recommendationrelatedeventresource";
/**
 *  Information about an event that is related to a recommendation.
**/
export declare class RecommendationRelatedEvent extends SpeakeasyBase {
    name?: string;
    resources?: RecommendationRelatedEventResource[];
}
