package shared

type NetworkFirewallMissingSubnetViolation struct {
	AvailabilityZone      *string `json:"AvailabilityZone,omitempty"`
	TargetViolationReason *string `json:"TargetViolationReason,omitempty"`
	Vpc                   *string `json:"VPC,omitempty"`
	ViolationTarget       *string `json:"ViolationTarget,omitempty"`
}
