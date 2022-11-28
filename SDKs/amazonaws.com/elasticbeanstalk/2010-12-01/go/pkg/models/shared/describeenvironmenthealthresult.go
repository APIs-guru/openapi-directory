package shared

import (
	"time"
)

// DescribeEnvironmentHealthResult
// Health details for an AWS Elastic Beanstalk environment.
type DescribeEnvironmentHealthResult struct {
	ApplicationMetrics *ApplicationMetrics
	Causes             []string
	Color              *string
	EnvironmentName    *string
	HealthStatus       *string
	InstancesHealth    *InstanceHealthSummary
	RefreshedAt        *time.Time
	Status             *EnvironmentHealthEnum
}
