package shared

type CustomerManagedChannelS3Storage struct {
	Bucket    string  `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix"`
	RoleArn   string  `json:"roleArn"`
}
