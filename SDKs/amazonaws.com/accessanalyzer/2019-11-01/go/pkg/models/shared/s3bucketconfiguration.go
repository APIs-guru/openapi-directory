package shared

type S3BucketConfiguration struct {
	AccessPoints            map[string]S3AccessPointConfiguration `json:"accessPoints,omitempty"`
	BucketACLGrants         []S3BucketACLGrantConfiguration       `json:"bucketAclGrants,omitempty"`
	BucketPolicy            *string                               `json:"bucketPolicy,omitempty"`
	BucketPublicAccessBlock *S3PublicAccessBlockConfiguration     `json:"bucketPublicAccessBlock,omitempty"`
}
