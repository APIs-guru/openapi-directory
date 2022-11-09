import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";
import { ExpectedRoute } from "./expectedroute";
import { Route } from "./route";


// NetworkFirewallInternetTrafficNotInspectedViolation
/** 
 * Violation detail for the subnet for which internet traffic that hasn't been inspected.
**/
export class NetworkFirewallInternetTrafficNotInspectedViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualFirewallSubnetRoutes", elemType: shared.Route })
  actualFirewallSubnetRoutes?: Route[];

  @Metadata({ data: "json, name=ActualInternetGatewayRoutes", elemType: shared.Route })
  actualInternetGatewayRoutes?: Route[];

  @Metadata({ data: "json, name=CurrentFirewallSubnetRouteTable" })
  currentFirewallSubnetRouteTable?: string;

  @Metadata({ data: "json, name=CurrentInternetGatewayRouteTable" })
  currentInternetGatewayRouteTable?: string;

  @Metadata({ data: "json, name=ExpectedFirewallEndpoint" })
  expectedFirewallEndpoint?: string;

  @Metadata({ data: "json, name=ExpectedFirewallSubnetRoutes", elemType: shared.ExpectedRoute })
  expectedFirewallSubnetRoutes?: ExpectedRoute[];

  @Metadata({ data: "json, name=ExpectedInternetGatewayRoutes", elemType: shared.ExpectedRoute })
  expectedInternetGatewayRoutes?: ExpectedRoute[];

  @Metadata({ data: "json, name=FirewallSubnetId" })
  firewallSubnetId?: string;

  @Metadata({ data: "json, name=InternetGatewayId" })
  internetGatewayId?: string;

  @Metadata({ data: "json, name=IsRouteTableUsedInDifferentAZ" })
  isRouteTableUsedInDifferentAz?: boolean;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @Metadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=ViolatingRoutes", elemType: shared.Route })
  violatingRoutes?: Route[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
