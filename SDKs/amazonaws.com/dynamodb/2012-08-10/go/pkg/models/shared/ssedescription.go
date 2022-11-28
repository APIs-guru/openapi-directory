package shared

import (
	"time"
)

// SseDescription
// The description of the server-side encryption status on the specified table.
type SseDescription struct {
	InaccessibleEncryptionDateTime *time.Time     `json:"InaccessibleEncryptionDateTime,omitempty"`
	KmsMasterKeyArn                *string        `json:"KMSMasterKeyArn,omitempty"`
	SseType                        *SseTypeEnum   `json:"SSEType,omitempty"`
	Status                         *SseStatusEnum `json:"Status,omitempty"`
}
