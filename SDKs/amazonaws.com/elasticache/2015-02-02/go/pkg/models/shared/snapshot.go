package shared

import (
	"time"
)

// Snapshot
// Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
type Snapshot struct {
	Arn                         *string
	AutoMinorVersionUpgrade     *bool
	AutomaticFailover           *AutomaticFailoverStatusEnum
	CacheClusterCreateTime      *time.Time
	CacheClusterID              *string
	CacheNodeType               *string
	CacheParameterGroupName     *string
	CacheSubnetGroupName        *string
	Engine                      *string
	EngineVersion               *string
	KmsKeyID                    *string
	NodeSnapshots               []NodeSnapshot
	NumCacheNodes               *int64
	NumNodeGroups               *int64
	Port                        *int64
	PreferredAvailabilityZone   *string
	PreferredMaintenanceWindow  *string
	PreferredOutpostArn         *string
	ReplicationGroupDescription *string
	ReplicationGroupID          *string
	SnapshotName                *string
	SnapshotRetentionLimit      *int64
	SnapshotSource              *string
	SnapshotStatus              *string
	SnapshotWindow              *string
	TopicArn                    *string
	VpcID                       *string
}
