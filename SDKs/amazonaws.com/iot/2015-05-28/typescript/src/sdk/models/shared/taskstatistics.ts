import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskStatistics
/** 
 * Statistics for the checks performed during the audit.
**/
export class TaskStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canceledChecks" })
  canceledChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=compliantChecks" })
  compliantChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=failedChecks" })
  failedChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=inProgressChecks" })
  inProgressChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantChecks" })
  nonCompliantChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=totalChecks" })
  totalChecks?: number;

  @SpeakeasyMetadata({ data: "json, name=waitingForDataCollectionChecks" })
  waitingForDataCollectionChecks?: number;
}
