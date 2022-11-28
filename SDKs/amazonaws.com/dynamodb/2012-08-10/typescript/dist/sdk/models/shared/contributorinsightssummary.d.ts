import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorInsightsStatusEnum } from "./contributorinsightsstatusenum";
/**
 * Represents a Contributor Insights summary entry.
**/
export declare class ContributorInsightsSummary extends SpeakeasyBase {
    contributorInsightsStatus?: ContributorInsightsStatusEnum;
    indexName?: string;
    tableName?: string;
}
