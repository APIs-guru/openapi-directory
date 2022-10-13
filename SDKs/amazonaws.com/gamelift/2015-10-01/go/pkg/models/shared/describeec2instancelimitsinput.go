package shared

type DescribeEc2InstanceLimitsInput struct {
	Ec2InstanceType *Ec2InstanceTypeEnum `json:"EC2InstanceType"`
	Location        *string              `json:"Location"`
}
