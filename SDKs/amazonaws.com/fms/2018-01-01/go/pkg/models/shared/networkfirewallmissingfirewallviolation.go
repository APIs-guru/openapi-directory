package shared

// NetworkFirewallMissingFirewallViolation
// Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.
type NetworkFirewallMissingFirewallViolation struct {
	AvailabilityZone      *string `json:"AvailabilityZone,omitempty"`
	TargetViolationReason *string `json:"TargetViolationReason,omitempty"`
	Vpc                   *string `json:"VPC,omitempty"`
	ViolationTarget       *string `json:"ViolationTarget,omitempty"`
}
