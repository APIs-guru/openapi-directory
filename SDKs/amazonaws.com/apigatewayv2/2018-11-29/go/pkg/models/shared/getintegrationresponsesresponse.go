package shared



type GetIntegrationResponsesResponse struct {
    Items []IntegrationResponse `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

