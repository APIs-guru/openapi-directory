import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnGateway } from "./vpngateway";



// CreateVpnGatewayResult
/** 
 * Contains the output of CreateVpnGateway.
**/
export class CreateVpnGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnGateway?: VpnGateway;
}
