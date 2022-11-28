import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
**/
export declare class NetworkFirewallBlackHoleRouteDetectedViolation extends SpeakeasyBase {
    routeTableId?: string;
    violatingRoutes?: Route[];
    violationTarget?: string;
    vpcId?: string;
}
