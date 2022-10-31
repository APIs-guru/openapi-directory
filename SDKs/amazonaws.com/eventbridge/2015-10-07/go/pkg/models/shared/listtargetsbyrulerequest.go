package shared



type ListTargetsByRuleRequest struct {
    EventBusName *string `json:"EventBusName,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Rule string `json:"Rule"`
    
}

