package shared

// CustomerManagedDatastoreS3Storage
// S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
type CustomerManagedDatastoreS3Storage struct {
	Bucket    string  `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
	RoleArn   string  `json:"roleArn"`
}
