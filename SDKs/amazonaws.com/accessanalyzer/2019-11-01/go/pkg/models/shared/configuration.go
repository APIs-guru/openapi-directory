package shared



type Configuration struct {
    IamRole *IamRoleConfiguration `json:"iamRole,omitempty"`
    KmsKey *KmsKeyConfiguration `json:"kmsKey,omitempty"`
    S3Bucket *S3BucketConfiguration `json:"s3Bucket,omitempty"`
    SecretsManagerSecret *SecretsManagerSecretConfiguration `json:"secretsManagerSecret,omitempty"`
    SqsQueue *SqsQueueConfiguration `json:"sqsQueue,omitempty"`
    
}

