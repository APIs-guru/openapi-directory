import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * Violation detail for an unexpected gateway route that’s present in a route table.
**/
export declare class NetworkFirewallUnexpectedGatewayRoutesViolation extends SpeakeasyBase {
    gatewayId?: string;
    routeTableId?: string;
    violatingRoutes?: Route[];
    vpcId?: string;
}
