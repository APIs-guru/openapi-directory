package shared

type S3ReportExportConfig struct {
	Bucket             *string                  `json:"bucket"`
	BucketOwner        *string                  `json:"bucketOwner"`
	EncryptionDisabled *bool                    `json:"encryptionDisabled"`
	EncryptionKey      *string                  `json:"encryptionKey"`
	Packaging          *ReportPackagingTypeEnum `json:"packaging"`
	Path               *string                  `json:"path"`
}
