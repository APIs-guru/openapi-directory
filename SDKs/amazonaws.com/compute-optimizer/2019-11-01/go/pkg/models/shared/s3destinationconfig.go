package shared



type S3DestinationConfig struct {
    Bucket *string `json:"bucket,omitempty"`
    KeyPrefix *string `json:"keyPrefix,omitempty"`
    
}

