package shared

// TerminateJobFlowsInput
//
//	Input to the <a>TerminateJobFlows</a> operation.
type TerminateJobFlowsInput struct {
	JobFlowIds []string `json:"JobFlowIds"`
}
