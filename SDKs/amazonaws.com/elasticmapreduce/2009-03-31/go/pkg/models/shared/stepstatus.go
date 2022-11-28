package shared

// StepStatus
// The execution status details of the cluster step.
type StepStatus struct {
	FailureDetails    *FailureDetails        `json:"FailureDetails,omitempty"`
	State             *StepStateEnum         `json:"State,omitempty"`
	StateChangeReason *StepStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *StepTimeline          `json:"Timeline,omitempty"`
}
