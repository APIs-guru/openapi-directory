import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationCategoryEnum } from "./recommendationcategoryenum";
import { RuleMetadata } from "./rulemetadata";
import { SeverityEnum } from "./severityenum";
/**
 *  Information about recommendations.
**/
export declare class RecommendationSummary extends SpeakeasyBase {
    description?: string;
    endLine?: number;
    filePath?: string;
    recommendationCategory?: RecommendationCategoryEnum;
    recommendationId?: string;
    ruleMetadata?: RuleMetadata;
    severity?: SeverityEnum;
    startLine?: number;
}
