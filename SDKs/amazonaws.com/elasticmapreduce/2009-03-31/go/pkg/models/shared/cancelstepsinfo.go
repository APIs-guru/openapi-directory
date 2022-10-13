package shared

type CancelStepsInfo struct {
	Reason *string                       `json:"Reason"`
	Status *CancelStepsRequestStatusEnum `json:"Status"`
	StepID *string                       `json:"StepId"`
}
