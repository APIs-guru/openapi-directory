import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";



// NetworkFirewallUnexpectedGatewayRoutesViolation
/** 
 * Violation detail for an unexpected gateway route that’s present in a route table.
**/
export class NetworkFirewallUnexpectedGatewayRoutesViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolatingRoutes", elemType: Route })
  violatingRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
