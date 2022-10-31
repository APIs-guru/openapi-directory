package shared

import (
	"time"
)

type UpdateArchiveResponse struct {
	ArchiveArn   *string           `json:"ArchiveArn,omitempty"`
	CreationTime *time.Time        `json:"CreationTime,omitempty"`
	State        *ArchiveStateEnum `json:"State,omitempty"`
	StateReason  *string           `json:"StateReason,omitempty"`
}
