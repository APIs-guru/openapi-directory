import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
export declare class GetAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    autoScalingGroupArns?: string[];
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    recommendationPreferences?: RecommendationPreferences;
}
