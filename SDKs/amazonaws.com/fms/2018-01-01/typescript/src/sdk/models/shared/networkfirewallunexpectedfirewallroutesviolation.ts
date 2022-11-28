import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";



// NetworkFirewallUnexpectedFirewallRoutesViolation
/** 
 * Violation detail for an unexpected route that's present in a route table.
**/
export class NetworkFirewallUnexpectedFirewallRoutesViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallEndpoint" })
  firewallEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallSubnetId" })
  firewallSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolatingRoutes", elemType: Route })
  violatingRoutes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
