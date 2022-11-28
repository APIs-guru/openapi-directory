package shared

// S3DestinationProperties
//
//	The properties that are applied when Amazon S3 is used as a destination.
type S3DestinationProperties struct {
	BucketName           string                `json:"bucketName"`
	BucketPrefix         *string               `json:"bucketPrefix,omitempty"`
	S3OutputFormatConfig *S3OutputFormatConfig `json:"s3OutputFormatConfig,omitempty"`
}
