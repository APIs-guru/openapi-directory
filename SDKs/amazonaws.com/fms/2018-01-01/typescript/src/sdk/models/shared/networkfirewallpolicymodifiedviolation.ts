import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkFirewallPolicyDescription } from "./networkfirewallpolicydescription";
import { NetworkFirewallPolicyDescription } from "./networkfirewallpolicydescription";


// NetworkFirewallPolicyModifiedViolation
/** 
 * Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
**/
export class NetworkFirewallPolicyModifiedViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentPolicyDescription" })
  currentPolicyDescription?: NetworkFirewallPolicyDescription;

  @Metadata({ data: "json, name=ExpectedPolicyDescription" })
  expectedPolicyDescription?: NetworkFirewallPolicyDescription;

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
