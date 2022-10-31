package shared

type ErrorHandlingConfig struct {
	BucketName                  *string `json:"bucketName,omitempty"`
	BucketPrefix                *string `json:"bucketPrefix,omitempty"`
	FailOnFirstDestinationError *bool   `json:"failOnFirstDestinationError,omitempty"`
}
