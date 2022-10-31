package shared

import (
"time")

type SseDescription struct {
    InaccessibleEncryptionDateTime *time.Time `json:"InaccessibleEncryptionDateTime,omitempty"`
    KmsMasterKeyArn *string `json:"KMSMasterKeyArn,omitempty"`
    SseType *SseTypeEnum `json:"SSEType,omitempty"`
    Status *SseStatusEnum `json:"Status,omitempty"`
    
}

