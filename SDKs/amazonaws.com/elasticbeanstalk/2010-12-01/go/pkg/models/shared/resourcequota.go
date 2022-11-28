package shared

// ResourceQuota
// The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
type ResourceQuota struct {
	Maximum *int64
}
