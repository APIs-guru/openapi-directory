package shared

import (
	"time"
)

type VirtualServiceRef struct {
	Arn                string    `json:"arn"`
	CreatedAt          time.Time `json:"createdAt"`
	LastUpdatedAt      time.Time `json:"lastUpdatedAt"`
	MeshName           string    `json:"meshName"`
	MeshOwner          string    `json:"meshOwner"`
	ResourceOwner      string    `json:"resourceOwner"`
	Version            int64     `json:"version"`
	VirtualServiceName string    `json:"virtualServiceName"`
}
