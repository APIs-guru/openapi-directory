package shared



type GetModelsResponse struct {
    Items []Model `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

