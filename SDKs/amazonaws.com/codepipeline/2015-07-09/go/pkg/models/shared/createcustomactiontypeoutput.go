package shared

type CreateCustomActionTypeOutput struct {
	ActionType ActionType `json:"actionType"`
	Tags       []Tag      `json:"tags,omitempty"`
}
