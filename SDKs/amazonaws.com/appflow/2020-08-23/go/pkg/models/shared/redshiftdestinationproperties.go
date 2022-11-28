package shared

// RedshiftDestinationProperties
//
//	The properties that are applied when Amazon Redshift is being used as a destination.
type RedshiftDestinationProperties struct {
	BucketPrefix           *string              `json:"bucketPrefix,omitempty"`
	ErrorHandlingConfig    *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
	IntermediateBucketName string               `json:"intermediateBucketName"`
	Object                 string               `json:"object"`
}
