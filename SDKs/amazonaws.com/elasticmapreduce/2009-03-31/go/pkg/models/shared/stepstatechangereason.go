package shared

type StepStateChangeReason struct {
	Code    *StepStateChangeReasonCodeEnum `json:"Code"`
	Message *string                        `json:"Message"`
}
