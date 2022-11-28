import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";



// NetworkFirewallInvalidRouteConfigurationViolation
/** 
 * Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
**/
export class NetworkFirewallInvalidRouteConfigurationViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualFirewallEndpoint" })
  actualFirewallEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ActualFirewallSubnetId" })
  actualFirewallSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ActualFirewallSubnetRoutes", elemType: Route })
  actualFirewallSubnetRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=ActualInternetGatewayRoutes", elemType: Route })
  actualInternetGatewayRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=AffectedSubnets" })
  affectedSubnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=CurrentFirewallSubnetRouteTable" })
  currentFirewallSubnetRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentInternetGatewayRouteTable" })
  currentInternetGatewayRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedFirewallEndpoint" })
  expectedFirewallEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedFirewallSubnetId" })
  expectedFirewallSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedFirewallSubnetRoutes", elemType: ExpectedRoute })
  expectedFirewallSubnetRoutes?: ExpectedRoute[];

  @SpeakeasyMetadata({ data: "json, name=ExpectedInternetGatewayRoutes", elemType: ExpectedRoute })
  expectedInternetGatewayRoutes?: ExpectedRoute[];

  @SpeakeasyMetadata({ data: "json, name=InternetGatewayId" })
  internetGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRouteTableUsedInDifferentAZ" })
  isRouteTableUsedInDifferentAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolatingRoute" })
  violatingRoute?: Route;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
