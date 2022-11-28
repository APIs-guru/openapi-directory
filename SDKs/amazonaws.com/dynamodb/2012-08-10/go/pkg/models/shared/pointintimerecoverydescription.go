package shared

import (
	"time"
)

// PointInTimeRecoveryDescription
// The description of the point in time settings applied to the table.
type PointInTimeRecoveryDescription struct {
	EarliestRestorableDateTime *time.Time                     `json:"EarliestRestorableDateTime,omitempty"`
	LatestRestorableDateTime   *time.Time                     `json:"LatestRestorableDateTime,omitempty"`
	PointInTimeRecoveryStatus  *PointInTimeRecoveryStatusEnum `json:"PointInTimeRecoveryStatus,omitempty"`
}
