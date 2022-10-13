package shared

type ListActionExecutionsOutput struct {
	ActionExecutionDetails []ActionExecutionDetail `json:"actionExecutionDetails"`
	NextToken              *string                 `json:"nextToken"`
}
