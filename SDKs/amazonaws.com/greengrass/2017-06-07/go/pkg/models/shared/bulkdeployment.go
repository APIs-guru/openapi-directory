package shared

// BulkDeployment
// Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
type BulkDeployment struct {
	BulkDeploymentArn *string `json:"BulkDeploymentArn,omitempty"`
	BulkDeploymentID  *string `json:"BulkDeploymentId,omitempty"`
	CreatedAt         *string `json:"CreatedAt,omitempty"`
}
