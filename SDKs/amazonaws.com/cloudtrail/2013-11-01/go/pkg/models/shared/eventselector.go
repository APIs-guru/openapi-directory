package shared

type EventSelector struct {
	DataResources                 []DataResource     `json:"DataResources,omitempty"`
	ExcludeManagementEventSources []string           `json:"ExcludeManagementEventSources,omitempty"`
	IncludeManagementEvents       *bool              `json:"IncludeManagementEvents,omitempty"`
	ReadWriteType                 *ReadWriteTypeEnum `json:"ReadWriteType,omitempty"`
}
