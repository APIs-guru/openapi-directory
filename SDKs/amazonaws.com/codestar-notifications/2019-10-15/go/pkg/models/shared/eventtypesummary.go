package shared

// EventTypeSummary
// Returns information about an event that has triggered a notification rule.
type EventTypeSummary struct {
	EventTypeID   *string `json:"EventTypeId,omitempty"`
	EventTypeName *string `json:"EventTypeName,omitempty"`
	ResourceType  *string `json:"ResourceType,omitempty"`
	ServiceName   *string `json:"ServiceName,omitempty"`
}
