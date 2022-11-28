package shared

import (
	"time"
)

// ListDomainItem
// An object in a list that represents a domain.
type ListDomainItem struct {
	CreatedAt     time.Time         `json:"CreatedAt"`
	DomainName    string            `json:"DomainName"`
	LastUpdatedAt time.Time         `json:"LastUpdatedAt"`
	Tags          map[string]string `json:"Tags,omitempty"`
}
