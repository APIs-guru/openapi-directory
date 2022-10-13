package shared

type CustomerManagedChannelS3StorageSummary struct {
	Bucket    *string `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix"`
	RoleArn   *string `json:"roleArn"`
}
