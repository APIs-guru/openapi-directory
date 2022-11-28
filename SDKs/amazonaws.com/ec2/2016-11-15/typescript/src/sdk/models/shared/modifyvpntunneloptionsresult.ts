import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



export class ModifyVpnTunnelOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: VpnConnection;
}
