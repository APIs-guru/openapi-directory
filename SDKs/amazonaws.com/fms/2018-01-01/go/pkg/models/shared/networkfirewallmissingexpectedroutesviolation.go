package shared

type NetworkFirewallMissingExpectedRoutesViolation struct {
	ExpectedRoutes  []ExpectedRoute `json:"ExpectedRoutes,omitempty"`
	ViolationTarget *string         `json:"ViolationTarget,omitempty"`
	VpcID           *string         `json:"VpcId,omitempty"`
}
