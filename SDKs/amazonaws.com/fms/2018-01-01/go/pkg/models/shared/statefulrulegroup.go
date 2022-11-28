package shared

// StatefulRuleGroup
// Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>.
type StatefulRuleGroup struct {
	ResourceID    *string `json:"ResourceId,omitempty"`
	RuleGroupName *string `json:"RuleGroupName,omitempty"`
}
