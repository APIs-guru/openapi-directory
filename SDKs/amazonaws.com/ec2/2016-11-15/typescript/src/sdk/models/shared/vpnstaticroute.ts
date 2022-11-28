import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnStaticRouteSourceEnum } from "./vpnstaticroutesourceenum";
import { VpnStateEnum } from "./vpnstateenum";



// VpnStaticRoute
/** 
 * Describes a static route for a VPN connection.
**/
export class VpnStaticRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidrBlock?: string;

  @SpeakeasyMetadata()
  source?: VpnStaticRouteSourceEnum;

  @SpeakeasyMetadata()
  state?: VpnStateEnum;
}
