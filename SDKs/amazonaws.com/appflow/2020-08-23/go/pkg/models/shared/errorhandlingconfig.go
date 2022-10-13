package shared

type ErrorHandlingConfig struct {
	BucketName                  *string `json:"bucketName"`
	BucketPrefix                *string `json:"bucketPrefix"`
	FailOnFirstDestinationError *bool   `json:"failOnFirstDestinationError"`
}
