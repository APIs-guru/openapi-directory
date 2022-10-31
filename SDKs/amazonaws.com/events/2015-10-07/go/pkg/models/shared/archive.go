package shared

import (
	"time"
)

type Archive struct {
	ArchiveName    *string           `json:"ArchiveName,omitempty"`
	CreationTime   *time.Time        `json:"CreationTime,omitempty"`
	EventCount     *int64            `json:"EventCount,omitempty"`
	EventSourceArn *string           `json:"EventSourceArn,omitempty"`
	RetentionDays  *int64            `json:"RetentionDays,omitempty"`
	SizeBytes      *int64            `json:"SizeBytes,omitempty"`
	State          *ArchiveStateEnum `json:"State,omitempty"`
	StateReason    *string           `json:"StateReason,omitempty"`
}
