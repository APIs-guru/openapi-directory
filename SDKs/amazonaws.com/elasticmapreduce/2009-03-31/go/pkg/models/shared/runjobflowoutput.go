package shared

type RunJobFlowOutput struct {
	ClusterArn *string `json:"ClusterArn,omitempty"`
	JobFlowID  *string `json:"JobFlowId,omitempty"`
}
