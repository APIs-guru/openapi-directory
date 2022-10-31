package shared



type S3RecordingConfig struct {
    BucketArn string `json:"bucketArn"`
    Prefix *string `json:"prefix,omitempty"`
    RoleArn string `json:"roleArn"`
    
}

