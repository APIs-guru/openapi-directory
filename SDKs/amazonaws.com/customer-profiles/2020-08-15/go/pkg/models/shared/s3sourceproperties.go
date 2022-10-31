package shared



type S3SourceProperties struct {
    BucketName string `json:"BucketName"`
    BucketPrefix *string `json:"BucketPrefix,omitempty"`
    
}

