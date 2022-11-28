import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";
/**
 * Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
**/
export declare class NetworkFirewallInvalidRouteConfigurationViolation extends SpeakeasyBase {
    actualFirewallEndpoint?: string;
    actualFirewallSubnetId?: string;
    actualFirewallSubnetRoutes?: Route[];
    actualInternetGatewayRoutes?: Route[];
    affectedSubnets?: string[];
    currentFirewallSubnetRouteTable?: string;
    currentInternetGatewayRouteTable?: string;
    expectedFirewallEndpoint?: string;
    expectedFirewallSubnetId?: string;
    expectedFirewallSubnetRoutes?: ExpectedRoute[];
    expectedInternetGatewayRoutes?: ExpectedRoute[];
    internetGatewayId?: string;
    isRouteTableUsedInDifferentAz?: boolean;
    routeTableId?: string;
    violatingRoute?: Route;
    vpcId?: string;
}
