import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskStatistics
/** 
 * Statistics for the checks performed during the audit.
**/
export class TaskStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=canceledChecks" })
  canceledChecks?: number;

  @Metadata({ data: "json, name=compliantChecks" })
  compliantChecks?: number;

  @Metadata({ data: "json, name=failedChecks" })
  failedChecks?: number;

  @Metadata({ data: "json, name=inProgressChecks" })
  inProgressChecks?: number;

  @Metadata({ data: "json, name=nonCompliantChecks" })
  nonCompliantChecks?: number;

  @Metadata({ data: "json, name=totalChecks" })
  totalChecks?: number;

  @Metadata({ data: "json, name=waitingForDataCollectionChecks" })
  waitingForDataCollectionChecks?: number;
}
