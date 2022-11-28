import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



// ApplyPendingMaintenanceActionResponse
/** 
 * <p/>
**/
export class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourcePendingMaintenanceActions" })
  resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
