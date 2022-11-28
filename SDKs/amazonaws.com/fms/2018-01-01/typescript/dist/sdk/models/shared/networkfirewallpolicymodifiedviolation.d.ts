import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkFirewallPolicyDescription } from "./networkfirewallpolicydescription";
/**
 * Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy.
**/
export declare class NetworkFirewallPolicyModifiedViolation extends SpeakeasyBase {
    currentPolicyDescription?: NetworkFirewallPolicyDescription;
    expectedPolicyDescription?: NetworkFirewallPolicyDescription;
    violationTarget?: string;
}
