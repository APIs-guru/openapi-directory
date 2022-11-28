package shared

import (
	"time"
)

// TunnelSummary
// Information about the tunnel.
type TunnelSummary struct {
	CreatedAt     *time.Time        `json:"createdAt,omitempty"`
	Description   *string           `json:"description,omitempty"`
	LastUpdatedAt *time.Time        `json:"lastUpdatedAt,omitempty"`
	Status        *TunnelStatusEnum `json:"status,omitempty"`
	TunnelArn     *string           `json:"tunnelArn,omitempty"`
	TunnelID      *string           `json:"tunnelId,omitempty"`
}
