package shared

// S3LogsConfig
//
//	Information about S3 logs for a build project.
type S3LogsConfig struct {
	BucketOwnerAccess  *BucketOwnerAccessEnum   `json:"bucketOwnerAccess,omitempty"`
	EncryptionDisabled *bool                    `json:"encryptionDisabled,omitempty"`
	Location           *string                  `json:"location,omitempty"`
	Status             LogsConfigStatusTypeEnum `json:"status"`
}
