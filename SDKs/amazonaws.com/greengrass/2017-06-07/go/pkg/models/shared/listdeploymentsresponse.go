package shared



type ListDeploymentsResponse struct {
    Deployments []Deployment `json:"Deployments,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

