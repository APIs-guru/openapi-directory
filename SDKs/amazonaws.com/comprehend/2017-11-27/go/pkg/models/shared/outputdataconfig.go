package shared

type OutputDataConfig struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	S3URI    string  `json:"S3Uri"`
}
