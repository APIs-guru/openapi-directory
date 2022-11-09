import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExpectedRoute } from "./expectedroute";


// NetworkFirewallMissingExpectedRoutesViolation
/** 
 * Violation detail for an expected route missing in Network Firewall.
**/
export class NetworkFirewallMissingExpectedRoutesViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpectedRoutes", elemType: shared.ExpectedRoute })
  expectedRoutes?: ExpectedRoute[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
