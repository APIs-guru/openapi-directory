package shared

type NetworkFirewallPolicyModifiedViolation struct {
	CurrentPolicyDescription  *NetworkFirewallPolicyDescription `json:"CurrentPolicyDescription"`
	ExpectedPolicyDescription *NetworkFirewallPolicyDescription `json:"ExpectedPolicyDescription"`
	ViolationTarget           *string                           `json:"ViolationTarget"`
}
