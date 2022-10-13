package shared

import (
	"time"
)

type GatewaySummary struct {
	CreationDate               time.Time                  `json:"creationDate"`
	GatewayCapabilitySummaries []GatewayCapabilitySummary `json:"gatewayCapabilitySummaries"`
	GatewayID                  string                     `json:"gatewayId"`
	GatewayName                string                     `json:"gatewayName"`
	GatewayPlatform            *GatewayPlatform           `json:"gatewayPlatform"`
	LastUpdateDate             time.Time                  `json:"lastUpdateDate"`
}
