package shared



type JobBookmarksEncryption struct {
    JobBookmarksEncryptionMode *JobBookmarksEncryptionModeEnum `json:"JobBookmarksEncryptionMode,omitempty"`
    KmsKeyArn *string `json:"KmsKeyArn,omitempty"`
    
}

