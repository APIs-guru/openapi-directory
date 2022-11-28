import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfacePermission } from "./networkinterfacepermission";



// CreateNetworkInterfacePermissionResult
/** 
 * Contains the output of CreateNetworkInterfacePermission.
**/
export class CreateNetworkInterfacePermissionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  interfacePermission?: NetworkInterfacePermission;
}
