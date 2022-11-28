import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * Violation detail for an unexpected route that's present in a route table.
**/
export declare class NetworkFirewallUnexpectedFirewallRoutesViolation extends SpeakeasyBase {
    firewallEndpoint?: string;
    firewallSubnetId?: string;
    routeTableId?: string;
    violatingRoutes?: Route[];
    vpcId?: string;
}
