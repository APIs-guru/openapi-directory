package shared

// S3ReportExportConfig
//
//	Information about the S3 bucket where the raw data of a report are exported.
type S3ReportExportConfig struct {
	Bucket             *string                  `json:"bucket,omitempty"`
	BucketOwner        *string                  `json:"bucketOwner,omitempty"`
	EncryptionDisabled *bool                    `json:"encryptionDisabled,omitempty"`
	EncryptionKey      *string                  `json:"encryptionKey,omitempty"`
	Packaging          *ReportPackagingTypeEnum `json:"packaging,omitempty"`
	Path               *string                  `json:"path,omitempty"`
}
