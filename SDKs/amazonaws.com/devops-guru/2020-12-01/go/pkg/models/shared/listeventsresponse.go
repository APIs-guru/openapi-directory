package shared

type ListEventsResponse struct {
	Events    []Event `json:"Events"`
	NextToken *string `json:"NextToken"`
}
