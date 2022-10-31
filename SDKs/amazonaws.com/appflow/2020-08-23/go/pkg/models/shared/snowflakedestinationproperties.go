package shared



type SnowflakeDestinationProperties struct {
    BucketPrefix *string `json:"bucketPrefix,omitempty"`
    ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
    IntermediateBucketName string `json:"intermediateBucketName"`
    Object string `json:"object"`
    
}

