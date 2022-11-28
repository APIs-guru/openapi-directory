package shared

import (
	"time"
)

// InstanceStatusDetails
// Describes the instance status.
type InstanceStatusDetails struct {
	ImpairedSince *time.Time
	Name          *StatusNameEnum
	Status        *StatusTypeEnum
}
