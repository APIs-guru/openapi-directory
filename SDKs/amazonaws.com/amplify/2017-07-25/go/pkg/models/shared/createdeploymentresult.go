package shared

type CreateDeploymentResult struct {
	FileUploadUrls map[string]string `json:"fileUploadUrls"`
	JobID          *string           `json:"jobId,omitempty"`
	ZipUploadURL   string            `json:"zipUploadUrl"`
}
