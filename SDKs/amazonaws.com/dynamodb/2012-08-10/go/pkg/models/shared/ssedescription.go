package shared

import (
	"time"
)

type SseDescription struct {
	InaccessibleEncryptionDateTime *time.Time     `json:"InaccessibleEncryptionDateTime"`
	KmsMasterKeyArn                *string        `json:"KMSMasterKeyArn"`
	SseType                        *SseTypeEnum   `json:"SSEType"`
	Status                         *SseStatusEnum `json:"Status"`
}
