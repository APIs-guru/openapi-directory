import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";


// NetworkFirewallUnexpectedFirewallRoutesViolation
/** 
 * Violation detail for an unexpected route that's present in a route table.
**/
export class NetworkFirewallUnexpectedFirewallRoutesViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallEndpoint" })
  firewallEndpoint?: string;

  @Metadata({ data: "json, name=FirewallSubnetId" })
  firewallSubnetId?: string;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @Metadata({ data: "json, name=ViolatingRoutes", elemType: shared.Route })
  violatingRoutes?: Route[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
