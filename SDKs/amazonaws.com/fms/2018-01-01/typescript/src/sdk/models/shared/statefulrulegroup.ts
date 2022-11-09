import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatefulRuleGroup
/** 
 * Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
**/
export class StatefulRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;
}
