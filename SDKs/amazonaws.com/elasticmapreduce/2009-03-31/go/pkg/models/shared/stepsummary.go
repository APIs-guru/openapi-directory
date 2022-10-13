package shared

type StepSummary struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure"`
	Config          *HadoopStepConfig    `json:"Config"`
	ID              *string              `json:"Id"`
	Name            *string              `json:"Name"`
	Status          *StepStatus          `json:"Status"`
}
