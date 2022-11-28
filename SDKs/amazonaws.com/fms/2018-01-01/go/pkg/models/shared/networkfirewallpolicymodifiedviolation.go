package shared

// NetworkFirewallPolicyModifiedViolation
// Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy.
type NetworkFirewallPolicyModifiedViolation struct {
	CurrentPolicyDescription  *NetworkFirewallPolicyDescription `json:"CurrentPolicyDescription,omitempty"`
	ExpectedPolicyDescription *NetworkFirewallPolicyDescription `json:"ExpectedPolicyDescription,omitempty"`
	ViolationTarget           *string                           `json:"ViolationTarget,omitempty"`
}
