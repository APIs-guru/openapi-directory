package shared

type CancelStepsInput struct {
	ClusterID              string                      `json:"ClusterId"`
	StepCancellationOption *StepCancellationOptionEnum `json:"StepCancellationOption,omitempty"`
	StepIds                []string                    `json:"StepIds"`
}
