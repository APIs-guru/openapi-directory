import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatelessRuleGroup
/** 
 * Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
**/
export class StatelessRuleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;
}
