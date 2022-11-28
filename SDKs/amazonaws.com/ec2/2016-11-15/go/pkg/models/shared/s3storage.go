package shared

// S3Storage
// Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
type S3Storage struct {
	AwsAccessKeyID        *string
	Bucket                *string
	Prefix                *string
	UploadPolicy          *string
	UploadPolicySignature *string
}
