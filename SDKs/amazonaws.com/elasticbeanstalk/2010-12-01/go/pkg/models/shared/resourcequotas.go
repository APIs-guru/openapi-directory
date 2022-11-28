package shared

// ResourceQuotas
// A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
type ResourceQuotas struct {
	ApplicationQuota           *ResourceQuota
	ApplicationVersionQuota    *ResourceQuota
	ConfigurationTemplateQuota *ResourceQuota
	CustomPlatformQuota        *ResourceQuota
	EnvironmentQuota           *ResourceQuota
}
