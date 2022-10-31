package shared



type ListTriggersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TriggerNames []string `json:"TriggerNames,omitempty"`
    
}

