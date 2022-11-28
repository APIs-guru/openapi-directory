package shared

// RunJobFlowOutput
//
//	The result of the <a>RunJobFlow</a> operation.
type RunJobFlowOutput struct {
	ClusterArn *string `json:"ClusterArn,omitempty"`
	JobFlowID  *string `json:"JobFlowId,omitempty"`
}
