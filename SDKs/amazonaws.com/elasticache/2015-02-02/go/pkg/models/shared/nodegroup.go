package shared

// NodeGroup
// Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
type NodeGroup struct {
	NodeGroupID      *string
	NodeGroupMembers []NodeGroupMember
	PrimaryEndpoint  *Endpoint
	ReaderEndpoint   *Endpoint
	Slots            *string
	Status           *string
}
