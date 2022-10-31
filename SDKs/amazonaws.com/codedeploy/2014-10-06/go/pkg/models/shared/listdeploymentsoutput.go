package shared



type ListDeploymentsOutput struct {
    Deployments []string `json:"deployments,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

