package shared

// ListFleetsInput
// Represents the input for a request operation.
type ListFleetsInput struct {
	BuildID   *string `json:"BuildId,omitempty"`
	Limit     *int64  `json:"Limit,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
	ScriptID  *string `json:"ScriptId,omitempty"`
}
