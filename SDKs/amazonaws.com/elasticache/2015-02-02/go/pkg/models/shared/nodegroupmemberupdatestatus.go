package shared

import (
	"time"
)

// NodeGroupMemberUpdateStatus
// The status of the service update on the node group member
type NodeGroupMemberUpdateStatus struct {
	CacheClusterID               *string
	CacheNodeID                  *string
	NodeDeletionDate             *time.Time
	NodeUpdateEndDate            *time.Time
	NodeUpdateInitiatedBy        *NodeUpdateInitiatedByEnum
	NodeUpdateInitiatedDate      *time.Time
	NodeUpdateStartDate          *time.Time
	NodeUpdateStatus             *NodeUpdateStatusEnum
	NodeUpdateStatusModifiedDate *time.Time
}
