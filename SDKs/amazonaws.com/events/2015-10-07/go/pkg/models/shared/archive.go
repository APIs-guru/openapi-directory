package shared

import (
	"time"
)

type Archive struct {
	ArchiveName    *string           `json:"ArchiveName"`
	CreationTime   *time.Time        `json:"CreationTime"`
	EventCount     *int64            `json:"EventCount"`
	EventSourceArn *string           `json:"EventSourceArn"`
	RetentionDays  *int64            `json:"RetentionDays"`
	SizeBytes      *int64            `json:"SizeBytes"`
	State          *ArchiveStateEnum `json:"State"`
	StateReason    *string           `json:"StateReason"`
}
