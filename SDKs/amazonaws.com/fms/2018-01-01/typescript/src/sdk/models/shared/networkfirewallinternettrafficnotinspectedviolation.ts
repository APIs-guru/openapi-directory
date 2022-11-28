import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";



// NetworkFirewallInternetTrafficNotInspectedViolation
/** 
 * Violation detail for the subnet for which internet traffic that hasn't been inspected.
**/
export class NetworkFirewallInternetTrafficNotInspectedViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualFirewallSubnetRoutes", elemType: Route })
  actualFirewallSubnetRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=ActualInternetGatewayRoutes", elemType: Route })
  actualInternetGatewayRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=CurrentFirewallSubnetRouteTable" })
  currentFirewallSubnetRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentInternetGatewayRouteTable" })
  currentInternetGatewayRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedFirewallEndpoint" })
  expectedFirewallEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedFirewallSubnetRoutes", elemType: ExpectedRoute })
  expectedFirewallSubnetRoutes?: ExpectedRoute[];

  @SpeakeasyMetadata({ data: "json, name=ExpectedInternetGatewayRoutes", elemType: ExpectedRoute })
  expectedInternetGatewayRoutes?: ExpectedRoute[];

  @SpeakeasyMetadata({ data: "json, name=FirewallSubnetId" })
  firewallSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InternetGatewayId" })
  internetGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRouteTableUsedInDifferentAZ" })
  isRouteTableUsedInDifferentAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolatingRoutes", elemType: Route })
  violatingRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
