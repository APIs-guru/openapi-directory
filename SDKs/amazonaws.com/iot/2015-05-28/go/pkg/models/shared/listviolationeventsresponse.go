package shared

type ListViolationEventsResponse struct {
	NextToken       *string          `json:"nextToken,omitempty"`
	ViolationEvents []ViolationEvent `json:"violationEvents,omitempty"`
}
