import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
**/
export declare class TaskStatisticsForAuditCheck extends SpeakeasyBase {
    canceledFindingsCount?: number;
    failedFindingsCount?: number;
    skippedFindingsCount?: number;
    succeededFindingsCount?: number;
    totalFindingsCount?: number;
}
