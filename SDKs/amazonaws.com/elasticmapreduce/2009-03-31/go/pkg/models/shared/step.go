package shared

// Step
// This represents a step in a cluster.
type Step struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure,omitempty"`
	Config          *HadoopStepConfig    `json:"Config,omitempty"`
	ID              *string              `json:"Id,omitempty"`
	Name            *string              `json:"Name,omitempty"`
	Status          *StepStatus          `json:"Status,omitempty"`
}
