package shared

type EventSelector struct {
	DataResources                 []DataResource     `json:"DataResources"`
	ExcludeManagementEventSources []string           `json:"ExcludeManagementEventSources"`
	IncludeManagementEvents       *bool              `json:"IncludeManagementEvents"`
	ReadWriteType                 *ReadWriteTypeEnum `json:"ReadWriteType"`
}
