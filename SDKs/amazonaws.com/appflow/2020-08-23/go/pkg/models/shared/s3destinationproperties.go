package shared

type S3DestinationProperties struct {
	BucketName           string                `json:"bucketName"`
	BucketPrefix         *string               `json:"bucketPrefix"`
	S3OutputFormatConfig *S3OutputFormatConfig `json:"s3OutputFormatConfig"`
}
