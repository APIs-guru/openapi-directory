package shared

// DeliveryChannel
// The channel through which Config delivers notifications and updated configuration states.
type DeliveryChannel struct {
	ConfigSnapshotDeliveryProperties *ConfigSnapshotDeliveryProperties `json:"configSnapshotDeliveryProperties,omitempty"`
	Name                             *string                           `json:"name,omitempty"`
	S3BucketName                     *string                           `json:"s3BucketName,omitempty"`
	S3KeyPrefix                      *string                           `json:"s3KeyPrefix,omitempty"`
	S3KmsKeyArn                      *string                           `json:"s3KmsKeyArn,omitempty"`
	SnsTopicArn                      *string                           `json:"snsTopicARN,omitempty"`
}
