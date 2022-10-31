package shared

import (
	"time"
)

type PointInTimeRecoveryDescription struct {
	EarliestRestorableDateTime *time.Time                     `json:"EarliestRestorableDateTime,omitempty"`
	LatestRestorableDateTime   *time.Time                     `json:"LatestRestorableDateTime,omitempty"`
	PointInTimeRecoveryStatus  *PointInTimeRecoveryStatusEnum `json:"PointInTimeRecoveryStatus,omitempty"`
}
