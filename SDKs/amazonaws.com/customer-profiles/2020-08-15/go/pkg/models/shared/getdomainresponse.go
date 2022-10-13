package shared

import (
	"time"
)

type GetDomainResponse struct {
	CreatedAt             time.Time         `json:"CreatedAt"`
	DeadLetterQueueURL    *string           `json:"DeadLetterQueueUrl"`
	DefaultEncryptionKey  *string           `json:"DefaultEncryptionKey"`
	DefaultExpirationDays *int64            `json:"DefaultExpirationDays"`
	DomainName            string            `json:"DomainName"`
	LastUpdatedAt         time.Time         `json:"LastUpdatedAt"`
	Matching              *MatchingResponse `json:"Matching"`
	Stats                 *DomainStats      `json:"Stats"`
	Tags                  map[string]string `json:"Tags"`
}
