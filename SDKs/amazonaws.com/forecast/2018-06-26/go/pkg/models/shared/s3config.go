package shared



type S3Config struct {
    KmsKeyArn *string `json:"KMSKeyArn,omitempty"`
    Path string `json:"Path"`
    RoleArn string `json:"RoleArn"`
    
}

