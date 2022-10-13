package shared

type NetworkFirewallPolicyDescription struct {
	StatefulRuleGroups              []StatefulRuleGroup  `json:"StatefulRuleGroups"`
	StatelessCustomActions          []string             `json:"StatelessCustomActions"`
	StatelessDefaultActions         []string             `json:"StatelessDefaultActions"`
	StatelessFragmentDefaultActions []string             `json:"StatelessFragmentDefaultActions"`
	StatelessRuleGroups             []StatelessRuleGroup `json:"StatelessRuleGroups"`
}
