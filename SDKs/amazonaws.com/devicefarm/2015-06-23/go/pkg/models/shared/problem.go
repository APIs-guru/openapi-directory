package shared

// Problem
// Represents a specific warning or failure.
type Problem struct {
	Device  *Device              `json:"device,omitempty"`
	Job     *ProblemDetail       `json:"job,omitempty"`
	Message *string              `json:"message,omitempty"`
	Result  *ExecutionResultEnum `json:"result,omitempty"`
	Run     *ProblemDetail       `json:"run,omitempty"`
	Suite   *ProblemDetail       `json:"suite,omitempty"`
	Test    *ProblemDetail       `json:"test,omitempty"`
}
