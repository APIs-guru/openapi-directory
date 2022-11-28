package shared

// EventParameters
// Specifies an event that triggers an event-based policy.
type EventParameters struct {
	DescriptionRegex string              `json:"DescriptionRegex"`
	EventType        EventTypeValuesEnum `json:"EventType"`
	SnapshotOwner    []string            `json:"SnapshotOwner"`
}
