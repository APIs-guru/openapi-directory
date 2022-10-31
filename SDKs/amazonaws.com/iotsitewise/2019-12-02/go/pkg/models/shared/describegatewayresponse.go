package shared

import (
	"time"
)

type DescribeGatewayResponse struct {
	CreationDate               time.Time                  `json:"creationDate"`
	GatewayArn                 string                     `json:"gatewayArn"`
	GatewayCapabilitySummaries []GatewayCapabilitySummary `json:"gatewayCapabilitySummaries"`
	GatewayID                  string                     `json:"gatewayId"`
	GatewayName                string                     `json:"gatewayName"`
	GatewayPlatform            *GatewayPlatform           `json:"gatewayPlatform,omitempty"`
	LastUpdateDate             time.Time                  `json:"lastUpdateDate"`
}
