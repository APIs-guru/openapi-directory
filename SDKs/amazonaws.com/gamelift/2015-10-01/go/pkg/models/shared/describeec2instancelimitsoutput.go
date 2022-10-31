package shared

type DescribeEc2InstanceLimitsOutput struct {
	Ec2InstanceLimits []Ec2InstanceLimit `json:"EC2InstanceLimits,omitempty"`
}
