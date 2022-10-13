package shared

type InstanceGroupModifyConfig struct {
	Configurations            []Configuration `json:"Configurations"`
	Ec2InstanceIdsToTerminate []string        `json:"EC2InstanceIdsToTerminate"`
	InstanceCount             *int64          `json:"InstanceCount"`
	InstanceGroupID           string          `json:"InstanceGroupId"`
	ShrinkPolicy              *ShrinkPolicy   `json:"ShrinkPolicy"`
}
