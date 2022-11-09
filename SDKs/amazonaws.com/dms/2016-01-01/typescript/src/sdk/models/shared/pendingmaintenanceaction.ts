import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingMaintenanceAction
/** 
 * Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
**/
export class PendingMaintenanceAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: string;

  @Metadata({ data: "json, name=AutoAppliedAfterDate" })
  autoAppliedAfterDate?: Date;

  @Metadata({ data: "json, name=CurrentApplyDate" })
  currentApplyDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ForcedApplyDate" })
  forcedApplyDate?: Date;

  @Metadata({ data: "json, name=OptInStatus" })
  optInStatus?: string;
}
