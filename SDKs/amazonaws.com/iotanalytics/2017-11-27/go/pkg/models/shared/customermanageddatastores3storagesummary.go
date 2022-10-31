package shared



type CustomerManagedDatastoreS3StorageSummary struct {
    Bucket *string `json:"bucket,omitempty"`
    KeyPrefix *string `json:"keyPrefix,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

