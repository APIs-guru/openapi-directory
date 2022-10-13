package shared

type OutputDataConfig struct {
	S3Bucket string  `json:"S3Bucket"`
	S3Key    *string `json:"S3Key"`
}
