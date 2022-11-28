import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



// DescribePendingMaintenanceActionsResponse
/** 
 * <p/>
**/
export class DescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=PendingMaintenanceActions", elemType: ResourcePendingMaintenanceActions })
  pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
