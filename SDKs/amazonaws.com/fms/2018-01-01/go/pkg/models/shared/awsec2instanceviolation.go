package shared

type AwsEc2InstanceViolation struct {
	AwsEc2NetworkInterfaceViolations []AwsEc2NetworkInterfaceViolation `json:"AwsEc2NetworkInterfaceViolations"`
	ViolationTarget                  *string                           `json:"ViolationTarget"`
}
