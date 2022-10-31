package shared

type ListActionTypesOutput struct {
	ActionTypes []ActionType `json:"actionTypes"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
