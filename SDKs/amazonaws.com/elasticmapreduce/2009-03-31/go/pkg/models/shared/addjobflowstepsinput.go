package shared

// AddJobFlowStepsInput
//
//	The input argument to the <a>AddJobFlowSteps</a> operation.
type AddJobFlowStepsInput struct {
	JobFlowID string       `json:"JobFlowId"`
	Steps     []StepConfig `json:"Steps"`
}
