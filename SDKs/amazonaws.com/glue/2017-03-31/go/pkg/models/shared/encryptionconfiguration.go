package shared



type EncryptionConfiguration struct {
    CloudWatchEncryption *CloudWatchEncryption `json:"CloudWatchEncryption,omitempty"`
    JobBookmarksEncryption *JobBookmarksEncryption `json:"JobBookmarksEncryption,omitempty"`
    S3Encryption []S3Encryption `json:"S3Encryption,omitempty"`
    
}

