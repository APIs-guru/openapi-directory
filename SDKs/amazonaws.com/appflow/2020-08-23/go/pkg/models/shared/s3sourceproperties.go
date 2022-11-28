package shared

// S3SourceProperties
//
//	The properties that are applied when Amazon S3 is being used as the flow source.
type S3SourceProperties struct {
	BucketName   string  `json:"bucketName"`
	BucketPrefix *string `json:"bucketPrefix,omitempty"`
}
