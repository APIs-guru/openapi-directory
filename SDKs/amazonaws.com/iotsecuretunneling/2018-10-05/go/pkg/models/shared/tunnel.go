package shared

import (
	"time"
)

type Tunnel struct {
	CreatedAt                  *time.Time         `json:"createdAt,omitempty"`
	Description                *string            `json:"description,omitempty"`
	DestinationConfig          *DestinationConfig `json:"destinationConfig,omitempty"`
	DestinationConnectionState *ConnectionState   `json:"destinationConnectionState,omitempty"`
	LastUpdatedAt              *time.Time         `json:"lastUpdatedAt,omitempty"`
	SourceConnectionState      *ConnectionState   `json:"sourceConnectionState,omitempty"`
	Status                     *TunnelStatusEnum  `json:"status,omitempty"`
	Tags                       []Tag              `json:"tags,omitempty"`
	TimeoutConfig              *TimeoutConfig     `json:"timeoutConfig,omitempty"`
	TunnelArn                  *string            `json:"tunnelArn,omitempty"`
	TunnelID                   *string            `json:"tunnelId,omitempty"`
}
