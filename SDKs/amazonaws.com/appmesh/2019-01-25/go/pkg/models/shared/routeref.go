package shared

import (
	"time"
)

// RouteRef
// An object that represents a route returned by a list operation.
type RouteRef struct {
	Arn               string    `json:"arn"`
	CreatedAt         time.Time `json:"createdAt"`
	LastUpdatedAt     time.Time `json:"lastUpdatedAt"`
	MeshName          string    `json:"meshName"`
	MeshOwner         string    `json:"meshOwner"`
	ResourceOwner     string    `json:"resourceOwner"`
	RouteName         string    `json:"routeName"`
	Version           int64     `json:"version"`
	VirtualRouterName string    `json:"virtualRouterName"`
}
