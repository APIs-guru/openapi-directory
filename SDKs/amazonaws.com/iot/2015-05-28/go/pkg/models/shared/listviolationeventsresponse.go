package shared

type ListViolationEventsResponse struct {
	NextToken       *string          `json:"nextToken"`
	ViolationEvents []ViolationEvent `json:"violationEvents"`
}
