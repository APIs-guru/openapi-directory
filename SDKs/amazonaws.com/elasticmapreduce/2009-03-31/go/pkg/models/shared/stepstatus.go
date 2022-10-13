package shared

type StepStatus struct {
	FailureDetails    *FailureDetails        `json:"FailureDetails"`
	State             *StepStateEnum         `json:"State"`
	StateChangeReason *StepStateChangeReason `json:"StateChangeReason"`
	Timeline          *StepTimeline          `json:"Timeline"`
}
