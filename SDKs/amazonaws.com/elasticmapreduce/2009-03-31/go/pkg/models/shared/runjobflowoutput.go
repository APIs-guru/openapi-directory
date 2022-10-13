package shared

type RunJobFlowOutput struct {
	ClusterArn *string `json:"ClusterArn"`
	JobFlowID  *string `json:"JobFlowId"`
}
