package shared

// ListInstanceGroupsOutput
// This input determines which instance groups to retrieve.
type ListInstanceGroupsOutput struct {
	InstanceGroups []InstanceGroup `json:"InstanceGroups,omitempty"`
	Marker         *string         `json:"Marker,omitempty"`
}
