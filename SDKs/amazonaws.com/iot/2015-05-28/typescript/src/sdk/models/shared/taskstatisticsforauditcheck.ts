import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskStatisticsForAuditCheck
/** 
 * Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
**/
export class TaskStatisticsForAuditCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=canceledFindingsCount" })
  canceledFindingsCount?: number;

  @Metadata({ data: "json, name=failedFindingsCount" })
  failedFindingsCount?: number;

  @Metadata({ data: "json, name=skippedFindingsCount" })
  skippedFindingsCount?: number;

  @Metadata({ data: "json, name=succeededFindingsCount" })
  succeededFindingsCount?: number;

  @Metadata({ data: "json, name=totalFindingsCount" })
  totalFindingsCount?: number;
}
