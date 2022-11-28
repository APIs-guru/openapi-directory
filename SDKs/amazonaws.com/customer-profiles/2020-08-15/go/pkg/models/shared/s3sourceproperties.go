package shared

// S3SourceProperties
// The properties that are applied when Amazon S3 is being used as the flow source.
type S3SourceProperties struct {
	BucketName   string  `json:"BucketName"`
	BucketPrefix *string `json:"BucketPrefix,omitempty"`
}
