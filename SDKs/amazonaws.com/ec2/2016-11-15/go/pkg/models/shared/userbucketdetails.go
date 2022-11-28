package shared

// UserBucketDetails
// Describes the Amazon S3 bucket for the disk image.
type UserBucketDetails struct {
	S3Bucket *string
	S3Key    *string
}
