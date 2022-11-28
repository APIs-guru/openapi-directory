package shared

// ListEventTypesFilter
// Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
type ListEventTypesFilter struct {
	Name  ListEventTypesFilterNameEnum `json:"Name"`
	Value string                       `json:"Value"`
}
