package shared

type S3ObjectACLEnum string

const (
	S3ObjectACLEnumPublicRead             S3ObjectACLEnum = "PUBLIC_READ"
	S3ObjectACLEnumBucketOwnerFullControl S3ObjectACLEnum = "BUCKET_OWNER_FULL_CONTROL"
)
