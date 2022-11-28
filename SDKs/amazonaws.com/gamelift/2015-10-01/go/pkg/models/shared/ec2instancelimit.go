package shared

// Ec2InstanceLimit
// <p>The GameLift service limits for an EC2 instance type and current utilization. GameLift allows AWS accounts a maximum number of instances, per instance type, per AWS Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeEC2InstanceLimits</a> </p>
type Ec2InstanceLimit struct {
	CurrentInstances *int64               `json:"CurrentInstances,omitempty"`
	Ec2InstanceType  *Ec2InstanceTypeEnum `json:"EC2InstanceType,omitempty"`
	InstanceLimit    *int64               `json:"InstanceLimit,omitempty"`
	Location         *string              `json:"Location,omitempty"`
}
