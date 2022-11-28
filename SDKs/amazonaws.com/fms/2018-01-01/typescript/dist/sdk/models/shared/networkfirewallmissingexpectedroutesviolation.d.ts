import { SpeakeasyBase } from "../../../internal/utils";
import { ExpectedRoute } from "./expectedroute";
/**
 * Violation detail for an expected route missing in Network Firewall.
**/
export declare class NetworkFirewallMissingExpectedRoutesViolation extends SpeakeasyBase {
    expectedRoutes?: ExpectedRoute[];
    violationTarget?: string;
    vpcId?: string;
}
