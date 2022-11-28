import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
import { Summary } from "./summary";
/**
 * A summary of a recommendation.
**/
export declare class RecommendationSummary extends SpeakeasyBase {
    accountId?: string;
    recommendationResourceType?: RecommendationSourceTypeEnum;
    summaries?: Summary[];
}
