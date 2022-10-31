package shared



type CloudWatchEncryption struct {
    CloudWatchEncryptionMode *CloudWatchEncryptionModeEnum `json:"CloudWatchEncryptionMode,omitempty"`
    KmsKeyArn *string `json:"KmsKeyArn,omitempty"`
    
}

