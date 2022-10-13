package shared

type Configuration struct {
	IamRole              *IamRoleConfiguration              `json:"iamRole"`
	KmsKey               *KmsKeyConfiguration               `json:"kmsKey"`
	S3Bucket             *S3BucketConfiguration             `json:"s3Bucket"`
	SecretsManagerSecret *SecretsManagerSecretConfiguration `json:"secretsManagerSecret"`
	SqsQueue             *SqsQueueConfiguration             `json:"sqsQueue"`
}
