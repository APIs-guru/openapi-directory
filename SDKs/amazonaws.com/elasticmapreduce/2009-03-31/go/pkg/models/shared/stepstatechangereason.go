package shared

// StepStateChangeReason
// The details of the step state change reason.
type StepStateChangeReason struct {
	Code    *StepStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                        `json:"Message,omitempty"`
}
