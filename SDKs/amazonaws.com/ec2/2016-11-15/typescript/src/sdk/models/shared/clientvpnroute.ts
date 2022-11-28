import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatus } from "./clientvpnroutestatus";



// ClientVpnRoute
/** 
 * Information about a Client VPN endpoint route.
**/
export class ClientVpnRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  destinationCidr?: string;

  @SpeakeasyMetadata()
  origin?: string;

  @SpeakeasyMetadata()
  status?: ClientVpnRouteStatus;

  @SpeakeasyMetadata()
  targetSubnet?: string;

  @SpeakeasyMetadata()
  type?: string;
}
