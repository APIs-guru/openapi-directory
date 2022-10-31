package shared



type AddInstanceGroupsInput struct {
    InstanceGroups []InstanceGroupConfig `json:"InstanceGroups"`
    JobFlowID string `json:"JobFlowId"`
    
}

