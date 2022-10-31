package shared

import (
"time")

type ResourceMetadata struct {
    Arn string `json:"arn"`
    CreatedAt time.Time `json:"createdAt"`
    LastUpdatedAt time.Time `json:"lastUpdatedAt"`
    MeshOwner string `json:"meshOwner"`
    ResourceOwner string `json:"resourceOwner"`
    UID string `json:"uid"`
    Version int64 `json:"version"`
    
}

