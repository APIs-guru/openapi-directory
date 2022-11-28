package shared

import (
	"time"
)

// AccountEnrollmentStatus
// Describes the enrollment status of an organization's member accounts in Compute Optimizer.
type AccountEnrollmentStatus struct {
	AccountID            *string     `json:"accountId,omitempty"`
	LastUpdatedTimestamp *time.Time  `json:"lastUpdatedTimestamp,omitempty"`
	Status               *StatusEnum `json:"status,omitempty"`
	StatusReason         *string     `json:"statusReason,omitempty"`
}
