package shared

type ListEventSourcesRequest struct {
	Limit      *int64  `json:"Limit"`
	NamePrefix *string `json:"NamePrefix"`
	NextToken  *string `json:"NextToken"`
}
