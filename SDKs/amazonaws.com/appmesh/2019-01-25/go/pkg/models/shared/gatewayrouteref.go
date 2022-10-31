package shared

import (
"time")

type GatewayRouteRef struct {
    Arn string `json:"arn"`
    CreatedAt time.Time `json:"createdAt"`
    GatewayRouteName string `json:"gatewayRouteName"`
    LastUpdatedAt time.Time `json:"lastUpdatedAt"`
    MeshName string `json:"meshName"`
    MeshOwner string `json:"meshOwner"`
    ResourceOwner string `json:"resourceOwner"`
    Version int64 `json:"version"`
    VirtualGatewayName string `json:"virtualGatewayName"`
    
}

