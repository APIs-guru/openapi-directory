package shared

type LookupEventsResponse struct {
	Events    []Event `json:"Events"`
	NextToken *string `json:"NextToken"`
}
