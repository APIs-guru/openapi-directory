package shared

type ListBulkDeploymentsResponse struct {
	BulkDeployments []BulkDeployment `json:"BulkDeployments"`
	NextToken       *string          `json:"NextToken"`
}
