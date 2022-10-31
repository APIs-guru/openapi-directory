package shared



type S3Destination struct {
    Bucket *string `json:"bucket,omitempty"`
    Key *string `json:"key,omitempty"`
    MetadataKey *string `json:"metadataKey,omitempty"`
    
}

