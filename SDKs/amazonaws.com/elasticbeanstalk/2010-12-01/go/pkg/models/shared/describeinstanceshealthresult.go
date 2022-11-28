package shared

import (
	"time"
)

// DescribeInstancesHealthResult
// Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
type DescribeInstancesHealthResult struct {
	InstanceHealthList []SingleInstanceHealth
	NextToken          *string
	RefreshedAt        *time.Time
}
