package shared

type ModifyInstanceGroupsInput struct {
	ClusterID      *string                     `json:"ClusterId,omitempty"`
	InstanceGroups []InstanceGroupModifyConfig `json:"InstanceGroups,omitempty"`
}
