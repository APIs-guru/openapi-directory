package shared

import (
"time")

type GetDomainResponse struct {
    CreatedAt time.Time `json:"CreatedAt"`
    DeadLetterQueueURL *string `json:"DeadLetterQueueUrl,omitempty"`
    DefaultEncryptionKey *string `json:"DefaultEncryptionKey,omitempty"`
    DefaultExpirationDays *int64 `json:"DefaultExpirationDays,omitempty"`
    DomainName string `json:"DomainName"`
    LastUpdatedAt time.Time `json:"LastUpdatedAt"`
    Matching *MatchingResponse `json:"Matching,omitempty"`
    Stats *DomainStats `json:"Stats,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

