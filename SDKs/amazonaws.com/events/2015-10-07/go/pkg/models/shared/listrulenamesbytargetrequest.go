package shared

type ListRuleNamesByTargetRequest struct {
	EventBusName *string `json:"EventBusName"`
	Limit        *int64  `json:"Limit"`
	NextToken    *string `json:"NextToken"`
	TargetArn    string  `json:"TargetArn"`
}
