import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";


// ResourcePendingMaintenanceActions
/** 
 * Identifies an DMS resource and any pending actions for it.
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=PendingMaintenanceActionDetails", elemType: shared.PendingMaintenanceAction })
  pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  @Metadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;
}
