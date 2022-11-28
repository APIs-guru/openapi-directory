package shared

import (
	"time"
)

// SingleInstanceHealth
// Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
type SingleInstanceHealth struct {
	ApplicationMetrics *ApplicationMetrics
	AvailabilityZone   *string
	Causes             []string
	Color              *string
	Deployment         *Deployment
	HealthStatus       *string
	InstanceID         *string
	InstanceType       *string
	LaunchedAt         *time.Time
	System             *SystemStatus
}
