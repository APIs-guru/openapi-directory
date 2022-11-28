import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelInsideIpVersionEnum } from "./tunnelinsideipversionenum";
import { TunnelOption } from "./tunneloption";
/**
 * Describes VPN connection options.
**/
export declare class VpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    tunnelInsideIpVersion?: TunnelInsideIpVersionEnum;
    tunnelOptions?: TunnelOption[];
}
