package shared

// NetworkFirewallMissingExpectedRoutesViolation
// Violation detail for an expected route missing in Network Firewall.
type NetworkFirewallMissingExpectedRoutesViolation struct {
	ExpectedRoutes  []ExpectedRoute `json:"ExpectedRoutes,omitempty"`
	ViolationTarget *string         `json:"ViolationTarget,omitempty"`
	VpcID           *string         `json:"VpcId,omitempty"`
}
