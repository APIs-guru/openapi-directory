import { SpeakeasyBase } from "../../../internal/utils";
import { VpnStaticRouteSourceEnum } from "./vpnstaticroutesourceenum";
import { VpnStateEnum } from "./vpnstateenum";
/**
 * Describes a static route for a VPN connection.
**/
export declare class VpnStaticRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: VpnStaticRouteSourceEnum;
    state?: VpnStateEnum;
}
