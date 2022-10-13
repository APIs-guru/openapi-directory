package shared

type ExperimentActionState struct {
	Reason *string                     `json:"reason"`
	Status *ExperimentActionStatusEnum `json:"status"`
}
