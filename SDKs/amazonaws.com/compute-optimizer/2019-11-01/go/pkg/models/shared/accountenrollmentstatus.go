package shared

import (
	"time"
)

type AccountEnrollmentStatus struct {
	AccountID            *string     `json:"accountId,omitempty"`
	LastUpdatedTimestamp *time.Time  `json:"lastUpdatedTimestamp,omitempty"`
	Status               *StatusEnum `json:"status,omitempty"`
	StatusReason         *string     `json:"statusReason,omitempty"`
}
