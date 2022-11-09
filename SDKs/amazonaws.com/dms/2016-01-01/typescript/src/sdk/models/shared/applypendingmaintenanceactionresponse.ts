import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";


// ApplyPendingMaintenanceActionResponse
/** 
 * <p/>
**/
export class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourcePendingMaintenanceActions" })
  resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
