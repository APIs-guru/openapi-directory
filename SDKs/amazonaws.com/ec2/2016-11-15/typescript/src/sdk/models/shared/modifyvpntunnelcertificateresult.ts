import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



export class ModifyVpnTunnelCertificateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: VpnConnection;
}
