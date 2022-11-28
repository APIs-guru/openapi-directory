package shared

// ListActionTypesOutput
// Represents the output of a <code>ListActionTypes</code> action.
type ListActionTypesOutput struct {
	ActionTypes []ActionType `json:"actionTypes"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
