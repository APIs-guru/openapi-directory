import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatefulRuleGroup
/** 
 * Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
**/
export class StatefulRuleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;
}
