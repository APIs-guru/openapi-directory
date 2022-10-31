package shared



type S3ReportExportConfig struct {
    Bucket *string `json:"bucket,omitempty"`
    BucketOwner *string `json:"bucketOwner,omitempty"`
    EncryptionDisabled *bool `json:"encryptionDisabled,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Packaging *ReportPackagingTypeEnum `json:"packaging,omitempty"`
    Path *string `json:"path,omitempty"`
    
}

