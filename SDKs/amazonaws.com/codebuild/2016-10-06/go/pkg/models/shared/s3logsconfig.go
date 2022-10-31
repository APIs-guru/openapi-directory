package shared



type S3LogsConfig struct {
    BucketOwnerAccess *BucketOwnerAccessEnum `json:"bucketOwnerAccess,omitempty"`
    EncryptionDisabled *bool `json:"encryptionDisabled,omitempty"`
    Location *string `json:"location,omitempty"`
    Status LogsConfigStatusTypeEnum `json:"status"`
    
}

