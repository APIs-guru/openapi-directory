package shared

type StepStatus struct {
	FailureDetails    *FailureDetails        `json:"FailureDetails,omitempty"`
	State             *StepStateEnum         `json:"State,omitempty"`
	StateChangeReason *StepStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *StepTimeline          `json:"Timeline,omitempty"`
}
