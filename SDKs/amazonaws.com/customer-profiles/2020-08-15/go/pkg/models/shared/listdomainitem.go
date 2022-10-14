package shared

import (
	"time"
)

type ListDomainItem struct {
	CreatedAt     time.Time         `json:"CreatedAt"`
	DomainName    string            `json:"DomainName"`
	LastUpdatedAt time.Time         `json:"LastUpdatedAt"`
	Tags          map[string]string `json:"Tags,omitempty"`
}
