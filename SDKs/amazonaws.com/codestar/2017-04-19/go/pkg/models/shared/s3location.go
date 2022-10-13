package shared

type S3Location struct {
	BucketKey  *string `json:"bucketKey"`
	BucketName *string `json:"bucketName"`
}
