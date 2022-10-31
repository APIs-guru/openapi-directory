package shared

type StepSummary struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure,omitempty"`
	Config          *HadoopStepConfig    `json:"Config,omitempty"`
	ID              *string              `json:"Id,omitempty"`
	Name            *string              `json:"Name,omitempty"`
	Status          *StepStatus          `json:"Status,omitempty"`
}
