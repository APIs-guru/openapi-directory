package shared

import (
	"time"
)

type PointInTimeRecoveryDescription struct {
	EarliestRestorableDateTime *time.Time                     `json:"EarliestRestorableDateTime"`
	LatestRestorableDateTime   *time.Time                     `json:"LatestRestorableDateTime"`
	PointInTimeRecoveryStatus  *PointInTimeRecoveryStatusEnum `json:"PointInTimeRecoveryStatus"`
}
