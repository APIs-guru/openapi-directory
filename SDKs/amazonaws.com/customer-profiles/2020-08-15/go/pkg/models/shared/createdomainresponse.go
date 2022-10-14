package shared

import (
	"time"
)

type CreateDomainResponse struct {
	CreatedAt             time.Time         `json:"CreatedAt"`
	DeadLetterQueueURL    *string           `json:"DeadLetterQueueUrl,omitempty"`
	DefaultEncryptionKey  *string           `json:"DefaultEncryptionKey,omitempty"`
	DefaultExpirationDays int64             `json:"DefaultExpirationDays"`
	DomainName            string            `json:"DomainName"`
	LastUpdatedAt         time.Time         `json:"LastUpdatedAt"`
	Matching              *MatchingResponse `json:"Matching,omitempty"`
	Tags                  map[string]string `json:"Tags,omitempty"`
}
