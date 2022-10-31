package shared

import (
"time")

type RouteRef struct {
    Arn string `json:"arn"`
    CreatedAt time.Time `json:"createdAt"`
    LastUpdatedAt time.Time `json:"lastUpdatedAt"`
    MeshName string `json:"meshName"`
    MeshOwner string `json:"meshOwner"`
    ResourceOwner string `json:"resourceOwner"`
    RouteName string `json:"routeName"`
    Version int64 `json:"version"`
    VirtualRouterName string `json:"virtualRouterName"`
    
}

