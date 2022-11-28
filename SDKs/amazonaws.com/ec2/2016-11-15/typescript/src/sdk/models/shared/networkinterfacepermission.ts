import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfacePermissionTypeEnum } from "./interfacepermissiontypeenum";
import { NetworkInterfacePermissionState } from "./networkinterfacepermissionstate";



// NetworkInterfacePermission
/** 
 * Describes a permission for a network interface.
**/
export class NetworkInterfacePermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccountId?: string;

  @SpeakeasyMetadata()
  awsService?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  networkInterfacePermissionId?: string;

  @SpeakeasyMetadata()
  permission?: InterfacePermissionTypeEnum;

  @SpeakeasyMetadata()
  permissionState?: NetworkInterfacePermissionState;
}
