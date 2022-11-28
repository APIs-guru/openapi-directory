package shared

// S3Location
// The Amazon S3 location where the source code files provided with the project request are stored.
type S3Location struct {
	BucketKey  *string `json:"bucketKey,omitempty"`
	BucketName *string `json:"bucketName,omitempty"`
}
