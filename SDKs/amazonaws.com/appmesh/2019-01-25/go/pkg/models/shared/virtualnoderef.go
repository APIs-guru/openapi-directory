package shared

import (
	"time"
)

// VirtualNodeRef
// An object that represents a virtual node returned by a list operation.
type VirtualNodeRef struct {
	Arn             string    `json:"arn"`
	CreatedAt       time.Time `json:"createdAt"`
	LastUpdatedAt   time.Time `json:"lastUpdatedAt"`
	MeshName        string    `json:"meshName"`
	MeshOwner       string    `json:"meshOwner"`
	ResourceOwner   string    `json:"resourceOwner"`
	Version         int64     `json:"version"`
	VirtualNodeName string    `json:"virtualNodeName"`
}
