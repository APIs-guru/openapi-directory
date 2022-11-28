package shared

// NetworkFirewallPolicyDescription
// The definition of the Network Firewall firewall policy.
type NetworkFirewallPolicyDescription struct {
	StatefulRuleGroups              []StatefulRuleGroup  `json:"StatefulRuleGroups,omitempty"`
	StatelessCustomActions          []string             `json:"StatelessCustomActions,omitempty"`
	StatelessDefaultActions         []string             `json:"StatelessDefaultActions,omitempty"`
	StatelessFragmentDefaultActions []string             `json:"StatelessFragmentDefaultActions,omitempty"`
	StatelessRuleGroups             []StatelessRuleGroup `json:"StatelessRuleGroups,omitempty"`
}
