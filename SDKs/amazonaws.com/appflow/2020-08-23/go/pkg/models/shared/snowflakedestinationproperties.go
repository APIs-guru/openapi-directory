package shared

// SnowflakeDestinationProperties
//
//	The properties that are applied when Snowflake is being used as a destination.
type SnowflakeDestinationProperties struct {
	BucketPrefix           *string              `json:"bucketPrefix,omitempty"`
	ErrorHandlingConfig    *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
	IntermediateBucketName string               `json:"intermediateBucketName"`
	Object                 string               `json:"object"`
}
