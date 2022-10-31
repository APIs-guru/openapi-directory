package shared



type EncryptionConfig struct {
    KmsKeyArn string `json:"KMSKeyArn"`
    RoleArn string `json:"RoleArn"`
    
}

