package shared

type ActionContext struct {
	ActionExecutionID *string `json:"actionExecutionId"`
	Name              *string `json:"name"`
}
