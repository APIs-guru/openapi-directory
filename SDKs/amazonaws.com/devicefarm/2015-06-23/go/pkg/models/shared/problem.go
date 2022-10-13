package shared

type Problem struct {
	Device  *Device              `json:"device"`
	Job     *ProblemDetail       `json:"job"`
	Message *string              `json:"message"`
	Result  *ExecutionResultEnum `json:"result"`
	Run     *ProblemDetail       `json:"run"`
	Suite   *ProblemDetail       `json:"suite"`
	Test    *ProblemDetail       `json:"test"`
}
