package shared

// AddInstanceGroupsInput
// Input to an AddInstanceGroups call.
type AddInstanceGroupsInput struct {
	InstanceGroups []InstanceGroupConfig `json:"InstanceGroups"`
	JobFlowID      string                `json:"JobFlowId"`
}
