package shared

type ListInstanceGroupsOutput struct {
	InstanceGroups []InstanceGroup `json:"InstanceGroups"`
	Marker         *string         `json:"Marker"`
}
