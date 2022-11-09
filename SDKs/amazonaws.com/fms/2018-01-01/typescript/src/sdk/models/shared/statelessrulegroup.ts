import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatelessRuleGroup
/** 
 * Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
**/
export class StatelessRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;
}
