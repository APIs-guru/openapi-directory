import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TunnelInsideIpVersionEnum } from "./tunnelinsideipversionenum";
import { TunnelOption } from "./tunneloption";



// VpnConnectionOptions
/** 
 * Describes VPN connection options.
**/
export class VpnConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableAcceleration?: boolean;

  @SpeakeasyMetadata()
  localIpv4NetworkCidr?: string;

  @SpeakeasyMetadata()
  localIpv6NetworkCidr?: string;

  @SpeakeasyMetadata()
  remoteIpv4NetworkCidr?: string;

  @SpeakeasyMetadata()
  remoteIpv6NetworkCidr?: string;

  @SpeakeasyMetadata()
  staticRoutesOnly?: boolean;

  @SpeakeasyMetadata()
  tunnelInsideIpVersion?: TunnelInsideIpVersionEnum;

  @SpeakeasyMetadata({ elemType: TunnelOption })
  tunnelOptions?: TunnelOption[];
}
