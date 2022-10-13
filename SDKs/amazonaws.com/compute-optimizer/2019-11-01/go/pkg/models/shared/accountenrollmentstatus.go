package shared

import (
	"time"
)

type AccountEnrollmentStatus struct {
	AccountID            *string     `json:"accountId"`
	LastUpdatedTimestamp *time.Time  `json:"lastUpdatedTimestamp"`
	Status               *StatusEnum `json:"status"`
	StatusReason         *string     `json:"statusReason"`
}
