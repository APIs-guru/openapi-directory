package shared

type DeliveryChannel struct {
	ConfigSnapshotDeliveryProperties *ConfigSnapshotDeliveryProperties `json:"configSnapshotDeliveryProperties"`
	Name                             *string                           `json:"name"`
	S3BucketName                     *string                           `json:"s3BucketName"`
	S3KeyPrefix                      *string                           `json:"s3KeyPrefix"`
	S3KmsKeyArn                      *string                           `json:"s3KmsKeyArn"`
	SnsTopicArn                      *string                           `json:"snsTopicARN"`
}
