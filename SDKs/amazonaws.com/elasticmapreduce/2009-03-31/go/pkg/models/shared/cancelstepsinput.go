package shared

type CancelStepsInput struct {
	ClusterID              string                      `json:"ClusterId"`
	StepCancellationOption *StepCancellationOptionEnum `json:"StepCancellationOption"`
	StepIds                []string                    `json:"StepIds"`
}
