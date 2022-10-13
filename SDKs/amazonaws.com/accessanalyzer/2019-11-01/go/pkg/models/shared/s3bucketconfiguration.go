package shared

type S3BucketConfiguration struct {
	AccessPoints            map[string]S3AccessPointConfiguration `json:"accessPoints"`
	BucketACLGrants         []S3BucketACLGrantConfiguration       `json:"bucketAclGrants"`
	BucketPolicy            *string                               `json:"bucketPolicy"`
	BucketPublicAccessBlock *S3PublicAccessBlockConfiguration     `json:"bucketPublicAccessBlock"`
}
