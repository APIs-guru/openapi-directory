import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";


// DescribePendingMaintenanceActionsResponse
/** 
 * <p/>
**/
export class DescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=PendingMaintenanceActions", elemType: shared.ResourcePendingMaintenanceActions })
  pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
