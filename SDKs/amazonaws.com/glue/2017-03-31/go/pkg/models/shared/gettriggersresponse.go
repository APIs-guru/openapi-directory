package shared



type GetTriggersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Triggers []Trigger `json:"Triggers,omitempty"`
    
}

