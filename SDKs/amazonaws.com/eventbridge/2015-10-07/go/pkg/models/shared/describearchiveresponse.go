package shared

import (
	"time"
)

type DescribeArchiveResponse struct {
	ArchiveArn     *string           `json:"ArchiveArn"`
	ArchiveName    *string           `json:"ArchiveName"`
	CreationTime   *time.Time        `json:"CreationTime"`
	Description    *string           `json:"Description"`
	EventCount     *int64            `json:"EventCount"`
	EventPattern   *string           `json:"EventPattern"`
	EventSourceArn *string           `json:"EventSourceArn"`
	RetentionDays  *int64            `json:"RetentionDays"`
	SizeBytes      *int64            `json:"SizeBytes"`
	State          *ArchiveStateEnum `json:"State"`
	StateReason    *string           `json:"StateReason"`
}
