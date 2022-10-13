package shared

type GetBulkDeploymentStatusResponse struct {
	BulkDeploymentMetrics *BulkDeploymentMetrics    `json:"BulkDeploymentMetrics"`
	BulkDeploymentStatus  *BulkDeploymentStatusEnum `json:"BulkDeploymentStatus"`
	CreatedAt             *string                   `json:"CreatedAt"`
	ErrorDetails          []ErrorDetail             `json:"ErrorDetails"`
	ErrorMessage          *string                   `json:"ErrorMessage"`
	Tags                  map[string]string         `json:"tags"`
}
