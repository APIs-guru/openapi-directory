package shared

type GetBulkDeploymentStatusResponse struct {
	BulkDeploymentMetrics *BulkDeploymentMetrics    `json:"BulkDeploymentMetrics,omitempty"`
	BulkDeploymentStatus  *BulkDeploymentStatusEnum `json:"BulkDeploymentStatus,omitempty"`
	CreatedAt             *string                   `json:"CreatedAt,omitempty"`
	ErrorDetails          []ErrorDetail             `json:"ErrorDetails,omitempty"`
	ErrorMessage          *string                   `json:"ErrorMessage,omitempty"`
	Tags                  map[string]string         `json:"tags,omitempty"`
}
