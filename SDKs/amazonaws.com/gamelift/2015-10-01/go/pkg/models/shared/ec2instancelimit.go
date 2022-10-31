package shared

type Ec2InstanceLimit struct {
	CurrentInstances *int64               `json:"CurrentInstances,omitempty"`
	Ec2InstanceType  *Ec2InstanceTypeEnum `json:"EC2InstanceType,omitempty"`
	InstanceLimit    *int64               `json:"InstanceLimit,omitempty"`
	Location         *string              `json:"Location,omitempty"`
}
