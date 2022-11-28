package shared

import (
	"time"
)

// DbCluster
// Detailed information about a cluster.
type DbCluster struct {
	AssociatedRoles              []DbClusterRole
	AvailabilityZones            []string
	BackupRetentionPeriod        *int64
	ClusterCreateTime            *time.Time
	DbClusterArn                 *string
	DbClusterIdentifier          *string
	DbClusterMembers             []DbClusterMember
	DbClusterParameterGroup      *string
	DbSubnetGroup                *string
	DbClusterResourceID          *string
	DeletionProtection           *bool
	EarliestRestorableTime       *time.Time
	EnabledCloudwatchLogsExports []string
	Endpoint                     *string
	Engine                       *string
	EngineVersion                *string
	HostedZoneID                 *string
	KmsKeyID                     *string
	LatestRestorableTime         *time.Time
	MasterUsername               *string
	MultiAz                      *bool
	PercentProgress              *string
	Port                         *int64
	PreferredBackupWindow        *string
	PreferredMaintenanceWindow   *string
	ReadReplicaIdentifiers       []string
	ReaderEndpoint               *string
	ReplicationSourceIdentifier  *string
	Status                       *string
	StorageEncrypted             *bool
	VpcSecurityGroups            []VpcSecurityGroupMembership
}
