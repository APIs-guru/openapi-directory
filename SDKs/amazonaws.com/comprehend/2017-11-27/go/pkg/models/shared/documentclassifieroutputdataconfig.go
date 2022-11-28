package shared

// DocumentClassifierOutputDataConfig
// Provides output results configuration parameters for custom classifier jobs.
type DocumentClassifierOutputDataConfig struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	S3URI    *string `json:"S3Uri,omitempty"`
}
