package shared

type AwsEc2NetworkInterfaceViolation struct {
	ViolatingSecurityGroups []string `json:"ViolatingSecurityGroups"`
	ViolationTarget         *string  `json:"ViolationTarget"`
}
