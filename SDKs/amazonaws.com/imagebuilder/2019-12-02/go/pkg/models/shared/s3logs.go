package shared

type S3Logs struct {
	S3BucketName *string `json:"s3BucketName"`
	S3KeyPrefix  *string `json:"s3KeyPrefix"`
}
