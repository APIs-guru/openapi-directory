package shared

type NetworkFirewallMissingFirewallViolation struct {
	AvailabilityZone      *string `json:"AvailabilityZone"`
	TargetViolationReason *string `json:"TargetViolationReason"`
	Vpc                   *string `json:"VPC"`
	ViolationTarget       *string `json:"ViolationTarget"`
}
