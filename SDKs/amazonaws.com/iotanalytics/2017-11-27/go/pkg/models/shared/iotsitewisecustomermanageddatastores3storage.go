package shared



type IotSiteWiseCustomerManagedDatastoreS3Storage struct {
    Bucket string `json:"bucket"`
    KeyPrefix *string `json:"keyPrefix,omitempty"`
    
}

