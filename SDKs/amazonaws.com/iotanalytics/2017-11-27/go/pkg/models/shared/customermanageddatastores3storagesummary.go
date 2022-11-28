package shared

// CustomerManagedDatastoreS3StorageSummary
// Contains information about the data store that you manage.
type CustomerManagedDatastoreS3StorageSummary struct {
	Bucket    *string `json:"bucket,omitempty"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
	RoleArn   *string `json:"roleArn,omitempty"`
}
