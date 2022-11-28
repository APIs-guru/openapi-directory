import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";



// ResourcePendingMaintenanceActions
/** 
 * Identifies an DMS resource and any pending actions for it.
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PendingMaintenanceActionDetails", elemType: PendingMaintenanceAction })
  pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;
}
