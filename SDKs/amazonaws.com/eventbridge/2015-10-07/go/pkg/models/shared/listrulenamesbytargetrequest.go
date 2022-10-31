package shared



type ListRuleNamesByTargetRequest struct {
    EventBusName *string `json:"EventBusName,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TargetArn string `json:"TargetArn"`
    
}

