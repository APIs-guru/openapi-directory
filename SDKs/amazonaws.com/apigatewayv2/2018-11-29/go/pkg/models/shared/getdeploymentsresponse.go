package shared



type GetDeploymentsResponse struct {
    Items []Deployment `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

