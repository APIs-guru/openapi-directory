package shared

// AwsEc2NetworkInterfaceViolation
// Violation detail for network interfaces associated with an EC2 instance.
type AwsEc2NetworkInterfaceViolation struct {
	ViolatingSecurityGroups []string `json:"ViolatingSecurityGroups,omitempty"`
	ViolationTarget         *string  `json:"ViolationTarget,omitempty"`
}
