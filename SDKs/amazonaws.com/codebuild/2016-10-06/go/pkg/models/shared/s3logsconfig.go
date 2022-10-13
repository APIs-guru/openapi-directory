package shared

type S3LogsConfig struct {
	BucketOwnerAccess  *BucketOwnerAccessEnum   `json:"bucketOwnerAccess"`
	EncryptionDisabled *bool                    `json:"encryptionDisabled"`
	Location           *string                  `json:"location"`
	Status             LogsConfigStatusTypeEnum `json:"status"`
}
