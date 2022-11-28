package shared

// DescribeEc2InstanceLimitsInput
// Represents the input for a request operation.
type DescribeEc2InstanceLimitsInput struct {
	Ec2InstanceType *Ec2InstanceTypeEnum `json:"EC2InstanceType,omitempty"`
	Location        *string              `json:"Location,omitempty"`
}
