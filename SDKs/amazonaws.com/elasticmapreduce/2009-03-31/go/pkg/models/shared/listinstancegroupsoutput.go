package shared



type ListInstanceGroupsOutput struct {
    InstanceGroups []InstanceGroup `json:"InstanceGroups,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

