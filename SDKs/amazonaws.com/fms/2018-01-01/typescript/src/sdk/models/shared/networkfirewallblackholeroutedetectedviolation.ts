import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";


// NetworkFirewallBlackHoleRouteDetectedViolation
/** 
 * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
**/
export class NetworkFirewallBlackHoleRouteDetectedViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @Metadata({ data: "json, name=ViolatingRoutes", elemType: shared.Route })
  violatingRoutes?: Route[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
