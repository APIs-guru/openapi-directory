package shared

type CancelStepsInfo struct {
	Reason *string                       `json:"Reason,omitempty"`
	Status *CancelStepsRequestStatusEnum `json:"Status,omitempty"`
	StepID *string                       `json:"StepId,omitempty"`
}
