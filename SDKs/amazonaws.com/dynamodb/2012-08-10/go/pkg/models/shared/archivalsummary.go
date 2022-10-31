package shared

import (
"time")

type ArchivalSummary struct {
    ArchivalBackupArn *string `json:"ArchivalBackupArn,omitempty"`
    ArchivalDateTime *time.Time `json:"ArchivalDateTime,omitempty"`
    ArchivalReason *string `json:"ArchivalReason,omitempty"`
    
}

