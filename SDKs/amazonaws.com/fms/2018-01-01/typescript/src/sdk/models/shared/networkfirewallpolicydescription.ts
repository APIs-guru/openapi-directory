import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatefulRuleGroup } from "./statefulrulegroup";
import { StatelessRuleGroup } from "./statelessrulegroup";


// NetworkFirewallPolicyDescription
/** 
 * The definition of the Network Firewall firewall policy.
**/
export class NetworkFirewallPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=StatefulRuleGroups", elemType: shared.StatefulRuleGroup })
  statefulRuleGroups?: StatefulRuleGroup[];

  @Metadata({ data: "json, name=StatelessCustomActions" })
  statelessCustomActions?: string[];

  @Metadata({ data: "json, name=StatelessDefaultActions" })
  statelessDefaultActions?: string[];

  @Metadata({ data: "json, name=StatelessFragmentDefaultActions" })
  statelessFragmentDefaultActions?: string[];

  @Metadata({ data: "json, name=StatelessRuleGroups", elemType: shared.StatelessRuleGroup })
  statelessRuleGroups?: StatelessRuleGroup[];
}
