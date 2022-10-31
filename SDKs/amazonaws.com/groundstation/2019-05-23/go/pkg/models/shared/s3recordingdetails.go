package shared



type S3RecordingDetails struct {
    BucketArn *string `json:"bucketArn,omitempty"`
    KeyTemplate *string `json:"keyTemplate,omitempty"`
    
}

