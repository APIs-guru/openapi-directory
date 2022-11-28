package shared

// NodeGroupMember
// Represents a single node within a node group (shard).
type NodeGroupMember struct {
	CacheClusterID            *string
	CacheNodeID               *string
	CurrentRole               *string
	PreferredAvailabilityZone *string
	PreferredOutpostArn       *string
	ReadEndpoint              *Endpoint
}
