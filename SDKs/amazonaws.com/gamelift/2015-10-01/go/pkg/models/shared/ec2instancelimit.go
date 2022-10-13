package shared

type Ec2InstanceLimit struct {
	CurrentInstances *int64               `json:"CurrentInstances"`
	Ec2InstanceType  *Ec2InstanceTypeEnum `json:"EC2InstanceType"`
	InstanceLimit    *int64               `json:"InstanceLimit"`
	Location         *string              `json:"Location"`
}
