package shared

// S3Location
// The bucket and key of an item stored in Amazon S3.
type S3Location struct {
	S3Bucket *string
	S3Key    *string
}
