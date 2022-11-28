import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfacePermissionStateCodeEnum } from "./networkinterfacepermissionstatecodeenum";



// NetworkInterfacePermissionState
/** 
 * Describes the state of a network interface permission.
**/
export class NetworkInterfacePermissionState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: NetworkInterfacePermissionStateCodeEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
