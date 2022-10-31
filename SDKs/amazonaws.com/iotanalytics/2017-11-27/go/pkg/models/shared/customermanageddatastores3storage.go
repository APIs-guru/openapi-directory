package shared



type CustomerManagedDatastoreS3Storage struct {
    Bucket string `json:"bucket"`
    KeyPrefix *string `json:"keyPrefix,omitempty"`
    RoleArn string `json:"roleArn"`
    
}

