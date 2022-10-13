package shared

import (
	"time"
)

type ArchivalSummary struct {
	ArchivalBackupArn *string    `json:"ArchivalBackupArn"`
	ArchivalDateTime  *time.Time `json:"ArchivalDateTime"`
	ArchivalReason    *string    `json:"ArchivalReason"`
}
