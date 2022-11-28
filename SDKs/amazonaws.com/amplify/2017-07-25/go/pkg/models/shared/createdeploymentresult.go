package shared

// CreateDeploymentResult
//
//	The result structure for the create a new deployment request.
type CreateDeploymentResult struct {
	FileUploadUrls map[string]string `json:"fileUploadUrls"`
	JobID          *string           `json:"jobId,omitempty"`
	ZipUploadURL   string            `json:"zipUploadUrl"`
}
