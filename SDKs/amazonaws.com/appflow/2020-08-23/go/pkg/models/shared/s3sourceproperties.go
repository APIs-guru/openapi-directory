package shared



type S3SourceProperties struct {
    BucketName string `json:"bucketName"`
    BucketPrefix *string `json:"bucketPrefix,omitempty"`
    
}

