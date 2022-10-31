package shared



type DescribeRuleRequest struct {
    EventBusName *string `json:"EventBusName,omitempty"`
    Name string `json:"Name"`
    
}

