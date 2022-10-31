package shared



type NeptuneSettings struct {
    ErrorRetryDuration *int64 `json:"ErrorRetryDuration,omitempty"`
    IamAuthEnabled *bool `json:"IamAuthEnabled,omitempty"`
    MaxFileSize *int64 `json:"MaxFileSize,omitempty"`
    MaxRetryCount *int64 `json:"MaxRetryCount,omitempty"`
    S3BucketFolder string `json:"S3BucketFolder"`
    S3BucketName string `json:"S3BucketName"`
    ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
    
}

