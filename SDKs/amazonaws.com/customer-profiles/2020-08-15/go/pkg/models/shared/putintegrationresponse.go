package shared

import (
	"time"
)

type PutIntegrationResponse struct {
	CreatedAt      time.Time         `json:"CreatedAt"`
	DomainName     string            `json:"DomainName"`
	LastUpdatedAt  time.Time         `json:"LastUpdatedAt"`
	ObjectTypeName string            `json:"ObjectTypeName"`
	Tags           map[string]string `json:"Tags"`
	URI            string            `json:"Uri"`
}
