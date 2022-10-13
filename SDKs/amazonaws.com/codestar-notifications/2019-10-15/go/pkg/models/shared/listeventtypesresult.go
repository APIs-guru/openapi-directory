package shared

type ListEventTypesResult struct {
	EventTypes []EventTypeSummary `json:"EventTypes"`
	NextToken  *string            `json:"NextToken"`
}
