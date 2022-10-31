package shared



type GetWorkingLocationResponse struct {
    S3Bucket *string `json:"s3Bucket,omitempty"`
    S3Path *string `json:"s3Path,omitempty"`
    S3URI *string `json:"s3Uri,omitempty"`
    
}

