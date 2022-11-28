import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleGroup } from "./statefulrulegroup";
import { StatelessRuleGroup } from "./statelessrulegroup";



// NetworkFirewallPolicyDescription
/** 
 * The definition of the Network Firewall firewall policy.
**/
export class NetworkFirewallPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StatefulRuleGroups", elemType: StatefulRuleGroup })
  statefulRuleGroups?: StatefulRuleGroup[];

  @SpeakeasyMetadata({ data: "json, name=StatelessCustomActions" })
  statelessCustomActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=StatelessDefaultActions" })
  statelessDefaultActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=StatelessFragmentDefaultActions" })
  statelessFragmentDefaultActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=StatelessRuleGroups", elemType: StatelessRuleGroup })
  statelessRuleGroups?: StatelessRuleGroup[];
}
