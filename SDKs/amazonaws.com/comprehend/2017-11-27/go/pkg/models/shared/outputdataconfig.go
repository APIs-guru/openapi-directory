package shared

type OutputDataConfig struct {
	KmsKeyID *string `json:"KmsKeyId"`
	S3URI    string  `json:"S3Uri"`
}
