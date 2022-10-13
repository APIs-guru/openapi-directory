package shared

type AddInstanceGroupsOutput struct {
	ClusterArn       *string  `json:"ClusterArn"`
	InstanceGroupIds []string `json:"InstanceGroupIds"`
	JobFlowID        *string  `json:"JobFlowId"`
}
