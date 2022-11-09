import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationSummary } from "./recommendationsummary";
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationSummaries?: RecommendationSummary[];
}
