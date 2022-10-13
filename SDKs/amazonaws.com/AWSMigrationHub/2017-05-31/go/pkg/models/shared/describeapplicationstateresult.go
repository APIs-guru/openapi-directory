package shared

import (
	"time"
)

type DescribeApplicationStateResult struct {
	ApplicationStatus *ApplicationStatusEnum `json:"ApplicationStatus"`
	LastUpdatedTime   *time.Time             `json:"LastUpdatedTime"`
}
