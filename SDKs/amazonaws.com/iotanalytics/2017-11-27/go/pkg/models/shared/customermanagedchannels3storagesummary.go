package shared

// CustomerManagedChannelS3StorageSummary
// Used to store channel data in an S3 bucket that you manage.
type CustomerManagedChannelS3StorageSummary struct {
	Bucket    *string `json:"bucket,omitempty"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
	RoleArn   *string `json:"roleArn,omitempty"`
}
