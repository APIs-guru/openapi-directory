package shared

// NetworkFirewallMissingExpectedRtViolation
// Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
type NetworkFirewallMissingExpectedRtViolation struct {
	AvailabilityZone   *string `json:"AvailabilityZone,omitempty"`
	CurrentRouteTable  *string `json:"CurrentRouteTable,omitempty"`
	ExpectedRouteTable *string `json:"ExpectedRouteTable,omitempty"`
	Vpc                *string `json:"VPC,omitempty"`
	ViolationTarget    *string `json:"ViolationTarget,omitempty"`
}
