import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";



// NetworkFirewallBlackHoleRouteDetectedViolation
/** 
 * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
**/
export class NetworkFirewallBlackHoleRouteDetectedViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolatingRoutes", elemType: Route })
  violatingRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
