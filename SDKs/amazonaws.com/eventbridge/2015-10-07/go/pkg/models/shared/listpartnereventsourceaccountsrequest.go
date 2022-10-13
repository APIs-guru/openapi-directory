package shared

type ListPartnerEventSourceAccountsRequest struct {
	EventSourceName string  `json:"EventSourceName"`
	Limit           *int64  `json:"Limit"`
	NextToken       *string `json:"NextToken"`
}
