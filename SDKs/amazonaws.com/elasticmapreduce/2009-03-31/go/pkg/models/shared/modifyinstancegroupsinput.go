package shared

// ModifyInstanceGroupsInput
// Change the size of some instance groups.
type ModifyInstanceGroupsInput struct {
	ClusterID      *string                     `json:"ClusterId,omitempty"`
	InstanceGroups []InstanceGroupModifyConfig `json:"InstanceGroups,omitempty"`
}
