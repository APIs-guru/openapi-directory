package shared

type EventTypeSummary struct {
	EventTypeID   *string `json:"EventTypeId"`
	EventTypeName *string `json:"EventTypeName"`
	ResourceType  *string `json:"ResourceType"`
	ServiceName   *string `json:"ServiceName"`
}
