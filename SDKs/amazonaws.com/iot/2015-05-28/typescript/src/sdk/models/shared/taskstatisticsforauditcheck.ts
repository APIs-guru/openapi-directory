import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskStatisticsForAuditCheck
/** 
 * Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
**/
export class TaskStatisticsForAuditCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canceledFindingsCount" })
  canceledFindingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failedFindingsCount" })
  failedFindingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=skippedFindingsCount" })
  skippedFindingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=succeededFindingsCount" })
  succeededFindingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalFindingsCount" })
  totalFindingsCount?: number;
}
