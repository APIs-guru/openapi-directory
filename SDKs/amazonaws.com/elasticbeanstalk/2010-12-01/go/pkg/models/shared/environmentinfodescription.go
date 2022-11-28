package shared

import (
	"time"
)

// EnvironmentInfoDescription
// The information retrieved from the Amazon EC2 instances.
type EnvironmentInfoDescription struct {
	Ec2InstanceID   *string
	InfoType        *EnvironmentInfoTypeEnum
	Message         *string
	SampleTimestamp *time.Time
}
