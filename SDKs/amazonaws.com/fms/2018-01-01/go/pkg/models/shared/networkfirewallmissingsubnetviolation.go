package shared

// NetworkFirewallMissingSubnetViolation
// Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
type NetworkFirewallMissingSubnetViolation struct {
	AvailabilityZone      *string `json:"AvailabilityZone,omitempty"`
	TargetViolationReason *string `json:"TargetViolationReason,omitempty"`
	Vpc                   *string `json:"VPC,omitempty"`
	ViolationTarget       *string `json:"ViolationTarget,omitempty"`
}
