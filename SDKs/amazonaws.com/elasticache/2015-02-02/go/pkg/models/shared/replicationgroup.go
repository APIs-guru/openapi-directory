package shared

import (
	"time"
)

// ReplicationGroup
// Contains all of the attributes of a specific Redis replication group.
type ReplicationGroup struct {
	Arn                        *string
	AtRestEncryptionEnabled    *bool
	AuthTokenEnabled           *bool
	AuthTokenLastModifiedDate  *time.Time
	AutomaticFailover          *AutomaticFailoverStatusEnum
	CacheNodeType              *string
	ClusterEnabled             *bool
	ConfigurationEndpoint      *Endpoint
	Description                *string
	GlobalReplicationGroupInfo *GlobalReplicationGroupInfo
	KmsKeyID                   *string
	LogDeliveryConfigurations  []LogDeliveryConfiguration
	MemberClusters             []string
	MemberClustersOutpostArns  []string
	MultiAz                    *MultiAzStatusEnum
	NodeGroups                 []NodeGroup
	PendingModifiedValues      *ReplicationGroupPendingModifiedValues
	ReplicationGroupCreateTime *time.Time
	ReplicationGroupID         *string
	SnapshotRetentionLimit     *int64
	SnapshotWindow             *string
	SnapshottingClusterID      *string
	Status                     *string
	TransitEncryptionEnabled   *bool
	UserGroupIds               []string
}
