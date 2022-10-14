package shared

type ListBulkDeploymentDetailedReportsResponse struct {
	Deployments []BulkDeploymentResult `json:"Deployments,omitempty"`
	NextToken   *string                `json:"NextToken,omitempty"`
}
