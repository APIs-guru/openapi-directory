package shared

type ListEventTypesResult struct {
	EventTypes []EventTypeSummary `json:"EventTypes,omitempty"`
	NextToken  *string            `json:"NextToken,omitempty"`
}
