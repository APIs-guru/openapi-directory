import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



// CreateVpnConnectionResult
/** 
 * Contains the output of CreateVpnConnection.
**/
export class CreateVpnConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: VpnConnection;
}
