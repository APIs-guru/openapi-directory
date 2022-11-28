import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



export class ModifyVpnConnectionOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: VpnConnection;
}
