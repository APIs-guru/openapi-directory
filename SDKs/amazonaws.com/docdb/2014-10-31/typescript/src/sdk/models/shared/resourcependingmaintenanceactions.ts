import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";



// ResourcePendingMaintenanceActions
/** 
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceAction })
  pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
