package shared

// CreateCustomActionTypeOutput
// Represents the output of a <code>CreateCustomActionType</code> operation.
type CreateCustomActionTypeOutput struct {
	ActionType ActionType `json:"actionType"`
	Tags       []Tag      `json:"tags,omitempty"`
}
