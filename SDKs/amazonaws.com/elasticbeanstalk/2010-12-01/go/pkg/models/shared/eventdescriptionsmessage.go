package shared

// EventDescriptionsMessage
// Result message wrapping a list of event descriptions.
type EventDescriptionsMessage struct {
	Events    []EventDescription
	NextToken *string
}
