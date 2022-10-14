package shared

import (
	"time"
)

type CreateArchiveResponse struct {
	ArchiveArn   *string           `json:"ArchiveArn,omitempty"`
	CreationTime *time.Time        `json:"CreationTime,omitempty"`
	State        *ArchiveStateEnum `json:"State,omitempty"`
	StateReason  *string           `json:"StateReason,omitempty"`
}
