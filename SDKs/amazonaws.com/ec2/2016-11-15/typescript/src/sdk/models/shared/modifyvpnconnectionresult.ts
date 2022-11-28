import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



export class ModifyVpnConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: VpnConnection;
}
