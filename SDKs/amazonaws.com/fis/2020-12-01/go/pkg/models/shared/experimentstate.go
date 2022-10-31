package shared

type ExperimentState struct {
	Reason *string               `json:"reason,omitempty"`
	Status *ExperimentStatusEnum `json:"status,omitempty"`
}
