package shared

import (
	"time"
)

// NodeSnapshot
// Represents an individual cache node in a snapshot of a cluster.
type NodeSnapshot struct {
	CacheClusterID         *string
	CacheNodeCreateTime    *time.Time
	CacheNodeID            *string
	CacheSize              *string
	NodeGroupConfiguration *NodeGroupConfiguration
	NodeGroupID            *string
	SnapshotCreateTime     *time.Time
}
