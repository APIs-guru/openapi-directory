package shared

import (
	"time"
)

// CacheNodeUpdateStatus
// The status of the service update on the cache node
type CacheNodeUpdateStatus struct {
	CacheNodeID                  *string
	NodeDeletionDate             *time.Time
	NodeUpdateEndDate            *time.Time
	NodeUpdateInitiatedBy        *NodeUpdateInitiatedByEnum
	NodeUpdateInitiatedDate      *time.Time
	NodeUpdateStartDate          *time.Time
	NodeUpdateStatus             *NodeUpdateStatusEnum
	NodeUpdateStatusModifiedDate *time.Time
}
