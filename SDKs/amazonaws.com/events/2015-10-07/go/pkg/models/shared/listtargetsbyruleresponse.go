package shared



type ListTargetsByRuleResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    
}

