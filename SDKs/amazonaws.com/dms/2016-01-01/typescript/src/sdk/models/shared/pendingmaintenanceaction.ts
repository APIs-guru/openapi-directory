import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingMaintenanceAction
/** 
 * Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
**/
export class PendingMaintenanceAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoAppliedAfterDate" })
  autoAppliedAfterDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplyDate" })
  currentApplyDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ForcedApplyDate" })
  forcedApplyDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OptInStatus" })
  optInStatus?: string;
}
