package shared

// NodeGroupConfiguration
// Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
type NodeGroupConfiguration struct {
	NodeGroupID              *string
	PrimaryAvailabilityZone  *string
	PrimaryOutpostArn        *string
	ReplicaAvailabilityZones []string
	ReplicaCount             *int64
	ReplicaOutpostArns       []string
	Slots                    *string
}
