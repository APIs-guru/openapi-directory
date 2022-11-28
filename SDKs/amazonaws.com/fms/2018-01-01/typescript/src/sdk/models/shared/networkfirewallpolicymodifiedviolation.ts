import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkFirewallPolicyDescription } from "./networkfirewallpolicydescription";



// NetworkFirewallPolicyModifiedViolation
/** 
 * Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
**/
export class NetworkFirewallPolicyModifiedViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentPolicyDescription" })
  currentPolicyDescription?: NetworkFirewallPolicyDescription;

  @SpeakeasyMetadata({ data: "json, name=ExpectedPolicyDescription" })
  expectedPolicyDescription?: NetworkFirewallPolicyDescription;

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
