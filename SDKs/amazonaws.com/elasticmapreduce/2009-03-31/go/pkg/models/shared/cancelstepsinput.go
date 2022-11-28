package shared

// CancelStepsInput
// The input argument to the <a>CancelSteps</a> operation.
type CancelStepsInput struct {
	ClusterID              string                      `json:"ClusterId"`
	StepCancellationOption *StepCancellationOptionEnum `json:"StepCancellationOption,omitempty"`
	StepIds                []string                    `json:"StepIds"`
}
