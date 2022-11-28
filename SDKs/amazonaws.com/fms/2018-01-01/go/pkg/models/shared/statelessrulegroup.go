package shared

// StatelessRuleGroup
// Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>.
type StatelessRuleGroup struct {
	Priority      *int64  `json:"Priority,omitempty"`
	ResourceID    *string `json:"ResourceId,omitempty"`
	RuleGroupName *string `json:"RuleGroupName,omitempty"`
}
