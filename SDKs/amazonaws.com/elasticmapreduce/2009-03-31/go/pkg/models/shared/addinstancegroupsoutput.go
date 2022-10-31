package shared

type AddInstanceGroupsOutput struct {
	ClusterArn       *string  `json:"ClusterArn,omitempty"`
	InstanceGroupIds []string `json:"InstanceGroupIds,omitempty"`
	JobFlowID        *string  `json:"JobFlowId,omitempty"`
}
