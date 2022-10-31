package shared

type NetworkFirewallMissingExpectedRtViolation struct {
	AvailabilityZone   *string `json:"AvailabilityZone,omitempty"`
	CurrentRouteTable  *string `json:"CurrentRouteTable,omitempty"`
	ExpectedRouteTable *string `json:"ExpectedRouteTable,omitempty"`
	Vpc                *string `json:"VPC,omitempty"`
	ViolationTarget    *string `json:"ViolationTarget,omitempty"`
}
