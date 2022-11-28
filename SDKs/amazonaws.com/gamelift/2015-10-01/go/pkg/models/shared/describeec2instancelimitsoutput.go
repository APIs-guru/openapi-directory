package shared

// DescribeEc2InstanceLimitsOutput
// Represents the returned data in response to a request operation.
type DescribeEc2InstanceLimitsOutput struct {
	Ec2InstanceLimits []Ec2InstanceLimit `json:"EC2InstanceLimits,omitempty"`
}
