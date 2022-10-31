package shared

type ListEventSourcesResponse struct {
	EventSources []EventSource `json:"EventSources,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}
