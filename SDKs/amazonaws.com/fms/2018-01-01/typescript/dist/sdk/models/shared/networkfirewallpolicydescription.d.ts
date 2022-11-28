import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleGroup } from "./statefulrulegroup";
import { StatelessRuleGroup } from "./statelessrulegroup";
/**
 * The definition of the Network Firewall firewall policy.
**/
export declare class NetworkFirewallPolicyDescription extends SpeakeasyBase {
    statefulRuleGroups?: StatefulRuleGroup[];
    statelessCustomActions?: string[];
    statelessDefaultActions?: string[];
    statelessFragmentDefaultActions?: string[];
    statelessRuleGroups?: StatelessRuleGroup[];
}
