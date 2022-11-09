import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
export declare class GetEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    filters?: Filter[];
    instanceArns?: string[];
    maxResults?: number;
    nextToken?: string;
    recommendationPreferences?: RecommendationPreferences;
}
