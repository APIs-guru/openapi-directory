package shared

// S3BucketACLGrantConfiguration
// A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.
type S3BucketACLGrantConfiguration struct {
	Grantee    ACLGrantee        `json:"grantee"`
	Permission ACLPermissionEnum `json:"permission"`
}
