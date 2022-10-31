package shared



type S3Destination struct {
    Bucket *string `json:"bucket,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    
}

