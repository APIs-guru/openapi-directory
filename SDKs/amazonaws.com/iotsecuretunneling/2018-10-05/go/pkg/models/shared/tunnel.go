package shared

import (
	"time"
)

type Tunnel struct {
	CreatedAt                  *time.Time         `json:"createdAt"`
	Description                *string            `json:"description"`
	DestinationConfig          *DestinationConfig `json:"destinationConfig"`
	DestinationConnectionState *ConnectionState   `json:"destinationConnectionState"`
	LastUpdatedAt              *time.Time         `json:"lastUpdatedAt"`
	SourceConnectionState      *ConnectionState   `json:"sourceConnectionState"`
	Status                     *TunnelStatusEnum  `json:"status"`
	Tags                       []Tag              `json:"tags"`
	TimeoutConfig              *TimeoutConfig     `json:"timeoutConfig"`
	TunnelArn                  *string            `json:"tunnelArn"`
	TunnelID                   *string            `json:"tunnelId"`
}
