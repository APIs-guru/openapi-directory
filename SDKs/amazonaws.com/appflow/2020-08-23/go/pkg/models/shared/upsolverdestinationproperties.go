package shared

// UpsolverDestinationProperties
//
//	The properties that are applied when Upsolver is used as a destination.
type UpsolverDestinationProperties struct {
	BucketName           string                       `json:"bucketName"`
	BucketPrefix         *string                      `json:"bucketPrefix,omitempty"`
	S3OutputFormatConfig UpsolverS3OutputFormatConfig `json:"s3OutputFormatConfig"`
}
