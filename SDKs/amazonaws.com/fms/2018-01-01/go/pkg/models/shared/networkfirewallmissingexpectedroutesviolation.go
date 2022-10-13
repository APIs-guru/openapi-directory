package shared

type NetworkFirewallMissingExpectedRoutesViolation struct {
	ExpectedRoutes  []ExpectedRoute `json:"ExpectedRoutes"`
	ViolationTarget *string         `json:"ViolationTarget"`
	VpcID           *string         `json:"VpcId"`
}
