package shared



type DescribeEc2InstanceLimitsInput struct {
    Ec2InstanceType *Ec2InstanceTypeEnum `json:"EC2InstanceType,omitempty"`
    Location *string `json:"Location,omitempty"`
    
}

