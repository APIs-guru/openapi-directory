package shared

type EventTypeSummary struct {
	EventTypeID   *string `json:"EventTypeId,omitempty"`
	EventTypeName *string `json:"EventTypeName,omitempty"`
	ResourceType  *string `json:"ResourceType,omitempty"`
	ServiceName   *string `json:"ServiceName,omitempty"`
}
