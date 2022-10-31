package shared



type ListBulkDeploymentsResponse struct {
    BulkDeployments []BulkDeployment `json:"BulkDeployments,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

