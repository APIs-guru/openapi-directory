package shared

type ListRulesRequest struct {
	EventBusName *string `json:"EventBusName"`
	Limit        *int64  `json:"Limit"`
	NamePrefix   *string `json:"NamePrefix"`
	NextToken    *string `json:"NextToken"`
}
