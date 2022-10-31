package shared



type ListAccountIntegrationsResponse struct {
    Items []ListIntegrationItem `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

