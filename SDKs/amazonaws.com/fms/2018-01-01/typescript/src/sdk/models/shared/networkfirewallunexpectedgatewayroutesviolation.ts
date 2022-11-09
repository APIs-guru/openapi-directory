import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";


// NetworkFirewallUnexpectedGatewayRoutesViolation
/** 
 * Violation detail for an unexpected gateway route that’s present in a route table.
**/
export class NetworkFirewallUnexpectedGatewayRoutesViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=GatewayId" })
  gatewayId?: string;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @Metadata({ data: "json, name=ViolatingRoutes", elemType: shared.Route })
  violatingRoutes?: Route[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
