import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



// PendingMaintenanceActionsMessage
/** 
 * Represents the output of <a>DescribePendingMaintenanceActions</a>.
**/
export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ResourcePendingMaintenanceActions })
  pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
