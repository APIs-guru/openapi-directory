package shared

// LookupEventsResponse
// Contains a response to a LookupEvents action.
type LookupEventsResponse struct {
	Events    []Event `json:"Events,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
