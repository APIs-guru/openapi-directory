package shared

type ListRulesRequest struct {
	EventBusName *string `json:"EventBusName,omitempty"`
	Limit        *int64  `json:"Limit,omitempty"`
	NamePrefix   *string `json:"NamePrefix,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
}
