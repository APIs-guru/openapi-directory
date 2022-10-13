package shared

type ModifyInstanceGroupsInput struct {
	ClusterID      *string                     `json:"ClusterId"`
	InstanceGroups []InstanceGroupModifyConfig `json:"InstanceGroups"`
}
