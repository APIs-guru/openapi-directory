package shared

type NetworkFirewallMissingExpectedRtViolation struct {
	AvailabilityZone   *string `json:"AvailabilityZone"`
	CurrentRouteTable  *string `json:"CurrentRouteTable"`
	ExpectedRouteTable *string `json:"ExpectedRouteTable"`
	Vpc                *string `json:"VPC"`
	ViolationTarget    *string `json:"ViolationTarget"`
}
