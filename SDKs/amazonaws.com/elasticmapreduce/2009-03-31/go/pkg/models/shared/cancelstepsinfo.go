package shared

// CancelStepsInfo
// Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
type CancelStepsInfo struct {
	Reason *string                       `json:"Reason,omitempty"`
	Status *CancelStepsRequestStatusEnum `json:"Status,omitempty"`
	StepID *string                       `json:"StepId,omitempty"`
}
