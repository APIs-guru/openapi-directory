import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSummary } from "./recommendationsummary";
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationSummaries?: RecommendationSummary[];
}
