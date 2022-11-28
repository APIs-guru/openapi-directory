package shared

import (
	"time"
)

// VirtualGatewayRef
// An object that represents a virtual gateway returned by a list operation.
type VirtualGatewayRef struct {
	Arn                string    `json:"arn"`
	CreatedAt          time.Time `json:"createdAt"`
	LastUpdatedAt      time.Time `json:"lastUpdatedAt"`
	MeshName           string    `json:"meshName"`
	MeshOwner          string    `json:"meshOwner"`
	ResourceOwner      string    `json:"resourceOwner"`
	Version            int64     `json:"version"`
	VirtualGatewayName string    `json:"virtualGatewayName"`
}
