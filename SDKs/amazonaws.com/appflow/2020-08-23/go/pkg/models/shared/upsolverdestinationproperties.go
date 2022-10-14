package shared

type UpsolverDestinationProperties struct {
	BucketName           string                       `json:"bucketName"`
	BucketPrefix         *string                      `json:"bucketPrefix,omitempty"`
	S3OutputFormatConfig UpsolverS3OutputFormatConfig `json:"s3OutputFormatConfig"`
}
