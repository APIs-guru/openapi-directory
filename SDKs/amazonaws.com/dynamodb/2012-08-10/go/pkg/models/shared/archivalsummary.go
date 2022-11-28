package shared

import (
	"time"
)

// ArchivalSummary
// Contains details of a table archival operation.
type ArchivalSummary struct {
	ArchivalBackupArn *string    `json:"ArchivalBackupArn,omitempty"`
	ArchivalDateTime  *time.Time `json:"ArchivalDateTime,omitempty"`
	ArchivalReason    *string    `json:"ArchivalReason,omitempty"`
}
