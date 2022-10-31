package shared

type NetworkFirewallPolicyModifiedViolation struct {
	CurrentPolicyDescription  *NetworkFirewallPolicyDescription `json:"CurrentPolicyDescription,omitempty"`
	ExpectedPolicyDescription *NetworkFirewallPolicyDescription `json:"ExpectedPolicyDescription,omitempty"`
	ViolationTarget           *string                           `json:"ViolationTarget,omitempty"`
}
