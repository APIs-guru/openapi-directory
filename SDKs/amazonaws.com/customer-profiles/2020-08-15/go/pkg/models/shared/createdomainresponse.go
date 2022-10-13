package shared

import (
	"time"
)

type CreateDomainResponse struct {
	CreatedAt             time.Time         `json:"CreatedAt"`
	DeadLetterQueueURL    *string           `json:"DeadLetterQueueUrl"`
	DefaultEncryptionKey  *string           `json:"DefaultEncryptionKey"`
	DefaultExpirationDays int64             `json:"DefaultExpirationDays"`
	DomainName            string            `json:"DomainName"`
	LastUpdatedAt         time.Time         `json:"LastUpdatedAt"`
	Matching              *MatchingResponse `json:"Matching"`
	Tags                  map[string]string `json:"Tags"`
}
