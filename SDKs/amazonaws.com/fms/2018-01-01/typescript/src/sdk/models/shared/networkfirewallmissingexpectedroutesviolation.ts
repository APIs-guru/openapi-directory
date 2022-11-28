import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpectedRoute } from "./expectedroute";



// NetworkFirewallMissingExpectedRoutesViolation
/** 
 * Violation detail for an expected route missing in Network Firewall.
**/
export class NetworkFirewallMissingExpectedRoutesViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpectedRoutes", elemType: ExpectedRoute })
  expectedRoutes?: ExpectedRoute[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
