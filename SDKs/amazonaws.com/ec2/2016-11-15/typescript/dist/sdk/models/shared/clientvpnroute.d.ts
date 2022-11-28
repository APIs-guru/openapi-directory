import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnRouteStatus } from "./clientvpnroutestatus";
/**
 * Information about a Client VPN endpoint route.
**/
export declare class ClientVpnRoute extends SpeakeasyBase {
    clientVpnEndpointId?: string;
    description?: string;
    destinationCidr?: string;
    origin?: string;
    status?: ClientVpnRouteStatus;
    targetSubnet?: string;
    type?: string;
}
