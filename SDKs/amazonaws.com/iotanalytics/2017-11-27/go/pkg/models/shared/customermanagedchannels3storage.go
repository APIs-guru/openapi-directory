package shared

// CustomerManagedChannelS3Storage
// Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.
type CustomerManagedChannelS3Storage struct {
	Bucket    string  `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
	RoleArn   string  `json:"roleArn"`
}
