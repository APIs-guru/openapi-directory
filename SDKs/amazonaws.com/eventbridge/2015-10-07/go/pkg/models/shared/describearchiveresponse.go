package shared

import (
	"time"
)

type DescribeArchiveResponse struct {
	ArchiveArn     *string           `json:"ArchiveArn,omitempty"`
	ArchiveName    *string           `json:"ArchiveName,omitempty"`
	CreationTime   *time.Time        `json:"CreationTime,omitempty"`
	Description    *string           `json:"Description,omitempty"`
	EventCount     *int64            `json:"EventCount,omitempty"`
	EventPattern   *string           `json:"EventPattern,omitempty"`
	EventSourceArn *string           `json:"EventSourceArn,omitempty"`
	RetentionDays  *int64            `json:"RetentionDays,omitempty"`
	SizeBytes      *int64            `json:"SizeBytes,omitempty"`
	State          *ArchiveStateEnum `json:"State,omitempty"`
	StateReason    *string           `json:"StateReason,omitempty"`
}
