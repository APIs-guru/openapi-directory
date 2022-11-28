package shared

// NodeGroupUpdateStatus
// The status of the service update on the node group
type NodeGroupUpdateStatus struct {
	NodeGroupID                 *string
	NodeGroupMemberUpdateStatus []NodeGroupMemberUpdateStatus
}
