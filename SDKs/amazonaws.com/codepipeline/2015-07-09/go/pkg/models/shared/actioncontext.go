package shared

// ActionContext
// Represents the context of an action in the stage of a pipeline to a job worker.
type ActionContext struct {
	ActionExecutionID *string `json:"actionExecutionId,omitempty"`
	Name              *string `json:"name,omitempty"`
}
