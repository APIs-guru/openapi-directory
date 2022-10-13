package shared

type InputDataConfig struct {
	S3Bucket string  `json:"S3Bucket"`
	S3Key    *string `json:"S3Key"`
}
