package shared

import (
	"time"
)

type CreateArchiveResponse struct {
	ArchiveArn   *string           `json:"ArchiveArn"`
	CreationTime *time.Time        `json:"CreationTime"`
	State        *ArchiveStateEnum `json:"State"`
	StateReason  *string           `json:"StateReason"`
}
