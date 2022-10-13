package shared

type ListTargetsByRuleRequest struct {
	EventBusName *string `json:"EventBusName"`
	Limit        *int64  `json:"Limit"`
	NextToken    *string `json:"NextToken"`
	Rule         string  `json:"Rule"`
}
