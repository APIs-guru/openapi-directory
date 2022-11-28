package shared

import (
	"time"
)

// GatewaySummary
// Contains a summary of a gateway.
type GatewaySummary struct {
	CreationDate               time.Time                  `json:"creationDate"`
	GatewayCapabilitySummaries []GatewayCapabilitySummary `json:"gatewayCapabilitySummaries,omitempty"`
	GatewayID                  string                     `json:"gatewayId"`
	GatewayName                string                     `json:"gatewayName"`
	GatewayPlatform            *GatewayPlatform           `json:"gatewayPlatform,omitempty"`
	LastUpdateDate             time.Time                  `json:"lastUpdateDate"`
}
