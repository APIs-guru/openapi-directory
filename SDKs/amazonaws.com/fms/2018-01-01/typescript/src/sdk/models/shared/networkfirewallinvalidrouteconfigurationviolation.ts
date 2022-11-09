import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";
import { Route } from "./route";
import { ExpectedRoute } from "./expectedroute";
import { ExpectedRoute } from "./expectedroute";
import { Route } from "./route";


// NetworkFirewallInvalidRouteConfigurationViolation
/** 
 * Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
**/
export class NetworkFirewallInvalidRouteConfigurationViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualFirewallEndpoint" })
  actualFirewallEndpoint?: string;

  @Metadata({ data: "json, name=ActualFirewallSubnetId" })
  actualFirewallSubnetId?: string;

  @Metadata({ data: "json, name=ActualFirewallSubnetRoutes", elemType: shared.Route })
  actualFirewallSubnetRoutes?: Route[];

  @Metadata({ data: "json, name=ActualInternetGatewayRoutes", elemType: shared.Route })
  actualInternetGatewayRoutes?: Route[];

  @Metadata({ data: "json, name=AffectedSubnets" })
  affectedSubnets?: string[];

  @Metadata({ data: "json, name=CurrentFirewallSubnetRouteTable" })
  currentFirewallSubnetRouteTable?: string;

  @Metadata({ data: "json, name=CurrentInternetGatewayRouteTable" })
  currentInternetGatewayRouteTable?: string;

  @Metadata({ data: "json, name=ExpectedFirewallEndpoint" })
  expectedFirewallEndpoint?: string;

  @Metadata({ data: "json, name=ExpectedFirewallSubnetId" })
  expectedFirewallSubnetId?: string;

  @Metadata({ data: "json, name=ExpectedFirewallSubnetRoutes", elemType: shared.ExpectedRoute })
  expectedFirewallSubnetRoutes?: ExpectedRoute[];

  @Metadata({ data: "json, name=ExpectedInternetGatewayRoutes", elemType: shared.ExpectedRoute })
  expectedInternetGatewayRoutes?: ExpectedRoute[];

  @Metadata({ data: "json, name=InternetGatewayId" })
  internetGatewayId?: string;

  @Metadata({ data: "json, name=IsRouteTableUsedInDifferentAZ" })
  isRouteTableUsedInDifferentAz?: boolean;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @Metadata({ data: "json, name=ViolatingRoute" })
  violatingRoute?: Route;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
