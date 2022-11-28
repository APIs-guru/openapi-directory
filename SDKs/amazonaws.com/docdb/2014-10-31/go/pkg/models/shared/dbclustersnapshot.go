package shared

import (
	"time"
)

// DbClusterSnapshot
// Detailed information about a cluster snapshot.
type DbClusterSnapshot struct {
	AvailabilityZones           []string
	ClusterCreateTime           *time.Time
	DbClusterIdentifier         *string
	DbClusterSnapshotArn        *string
	DbClusterSnapshotIdentifier *string
	Engine                      *string
	EngineVersion               *string
	KmsKeyID                    *string
	MasterUsername              *string
	PercentProgress             *int64
	Port                        *int64
	SnapshotCreateTime          *time.Time
	SnapshotType                *string
	SourceDbClusterSnapshotArn  *string
	Status                      *string
	StorageEncrypted            *bool
	VpcID                       *string
}
