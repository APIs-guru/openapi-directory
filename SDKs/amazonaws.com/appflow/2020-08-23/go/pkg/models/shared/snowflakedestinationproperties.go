package shared

type SnowflakeDestinationProperties struct {
	BucketPrefix           *string              `json:"bucketPrefix"`
	ErrorHandlingConfig    *ErrorHandlingConfig `json:"errorHandlingConfig"`
	IntermediateBucketName string               `json:"intermediateBucketName"`
	Object                 string               `json:"object"`
}
