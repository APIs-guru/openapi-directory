package shared

// ErrorHandlingConfig
//
//	The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
type ErrorHandlingConfig struct {
	BucketName                  *string `json:"bucketName,omitempty"`
	BucketPrefix                *string `json:"bucketPrefix,omitempty"`
	FailOnFirstDestinationError *bool   `json:"failOnFirstDestinationError,omitempty"`
}
