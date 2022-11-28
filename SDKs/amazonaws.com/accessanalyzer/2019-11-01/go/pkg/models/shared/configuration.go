package shared

// Configuration
// Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
type Configuration struct {
	IamRole              *IamRoleConfiguration              `json:"iamRole,omitempty"`
	KmsKey               *KmsKeyConfiguration               `json:"kmsKey,omitempty"`
	S3Bucket             *S3BucketConfiguration             `json:"s3Bucket,omitempty"`
	SecretsManagerSecret *SecretsManagerSecretConfiguration `json:"secretsManagerSecret,omitempty"`
	SqsQueue             *SqsQueueConfiguration             `json:"sqsQueue,omitempty"`
}
