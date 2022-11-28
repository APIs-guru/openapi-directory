package shared

import (
	"time"
)

// MeshRef
// An object that represents a service mesh returned by a list operation.
type MeshRef struct {
	Arn           string    `json:"arn"`
	CreatedAt     time.Time `json:"createdAt"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt"`
	MeshName      string    `json:"meshName"`
	MeshOwner     string    `json:"meshOwner"`
	ResourceOwner string    `json:"resourceOwner"`
	Version       int64     `json:"version"`
}
