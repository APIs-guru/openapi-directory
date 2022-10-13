package shared

type ListBulkDeploymentDetailedReportsResponse struct {
	Deployments []BulkDeploymentResult `json:"Deployments"`
	NextToken   *string                `json:"NextToken"`
}
