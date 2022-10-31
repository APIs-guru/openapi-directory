package shared

import (
"time")

type GatewaySummary struct {
    CreationDate time.Time `json:"creationDate"`
    GatewayCapabilitySummaries []GatewayCapabilitySummary `json:"gatewayCapabilitySummaries,omitempty"`
    GatewayID string `json:"gatewayId"`
    GatewayName string `json:"gatewayName"`
    GatewayPlatform *GatewayPlatform `json:"gatewayPlatform,omitempty"`
    LastUpdateDate time.Time `json:"lastUpdateDate"`
    
}

