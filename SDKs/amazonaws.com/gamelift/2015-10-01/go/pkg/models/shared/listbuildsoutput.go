package shared

// ListBuildsOutput
// Represents the returned data in response to a request operation.
type ListBuildsOutput struct {
	Builds    []Build `json:"Builds,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
