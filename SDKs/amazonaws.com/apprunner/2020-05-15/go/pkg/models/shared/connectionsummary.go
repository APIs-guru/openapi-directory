package shared

import (
	"time"
)

// ConnectionSummary
// Provides summary information about an AWS App Runner connection resource.
type ConnectionSummary struct {
	ConnectionArn  *string               `json:"ConnectionArn,omitempty"`
	ConnectionName *string               `json:"ConnectionName,omitempty"`
	CreatedAt      *time.Time            `json:"CreatedAt,omitempty"`
	ProviderType   *ProviderTypeEnum     `json:"ProviderType,omitempty"`
	Status         *ConnectionStatusEnum `json:"Status,omitempty"`
}
