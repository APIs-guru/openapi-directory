package shared

type ListEventSourcesResponse struct {
	EventSources []EventSource `json:"EventSources"`
	NextToken    *string       `json:"NextToken"`
}
