package shared

// PiiOutputDataConfig
// Provides configuration parameters for the output of PII entity detection jobs.
type PiiOutputDataConfig struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	S3URI    string  `json:"S3Uri"`
}
