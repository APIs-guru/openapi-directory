package shared

import (
	"time"
)

// ListIntegrationItem
// An integration in list of integrations.
type ListIntegrationItem struct {
	CreatedAt      time.Time         `json:"CreatedAt"`
	DomainName     string            `json:"DomainName"`
	LastUpdatedAt  time.Time         `json:"LastUpdatedAt"`
	ObjectTypeName string            `json:"ObjectTypeName"`
	Tags           map[string]string `json:"Tags,omitempty"`
	URI            string            `json:"Uri"`
}
