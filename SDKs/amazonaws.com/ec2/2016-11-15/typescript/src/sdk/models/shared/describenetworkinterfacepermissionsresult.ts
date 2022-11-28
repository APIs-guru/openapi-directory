import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfacePermission } from "./networkinterfacepermission";



// DescribeNetworkInterfacePermissionsResult
/** 
 * Contains the output for DescribeNetworkInterfacePermissions.
**/
export class DescribeNetworkInterfacePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInterfacePermission })
  networkInterfacePermissions?: NetworkInterfacePermission[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
