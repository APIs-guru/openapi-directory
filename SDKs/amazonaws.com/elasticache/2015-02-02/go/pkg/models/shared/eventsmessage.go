package shared

// EventsMessage
// Represents the output of a <code>DescribeEvents</code> operation.
type EventsMessage struct {
	Events []Event
	Marker *string
}
