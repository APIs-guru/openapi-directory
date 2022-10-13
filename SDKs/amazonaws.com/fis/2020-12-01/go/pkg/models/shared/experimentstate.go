package shared

type ExperimentState struct {
	Reason *string               `json:"reason"`
	Status *ExperimentStatusEnum `json:"status"`
}
