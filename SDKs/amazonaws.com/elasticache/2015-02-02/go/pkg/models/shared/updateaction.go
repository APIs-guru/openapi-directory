package shared

import (
	"time"
)

// UpdateAction
// The status of the service update for a specific replication group
type UpdateAction struct {
	CacheClusterID                      *string
	CacheNodeUpdateStatus               []CacheNodeUpdateStatus
	Engine                              *string
	EstimatedUpdateTime                 *string
	NodeGroupUpdateStatus               []NodeGroupUpdateStatus
	NodesUpdated                        *string
	ReplicationGroupID                  *string
	ServiceUpdateName                   *string
	ServiceUpdateRecommendedApplyByDate *time.Time
	ServiceUpdateReleaseDate            *time.Time
	ServiceUpdateSeverity               *ServiceUpdateSeverityEnum
	ServiceUpdateStatus                 *ServiceUpdateStatusEnum
	ServiceUpdateType                   *ServiceUpdateTypeEnum
	SLAMet                              *SLAMetEnum
	UpdateActionAvailableDate           *time.Time
	UpdateActionStatus                  *UpdateActionStatusEnum
	UpdateActionStatusModifiedDate      *time.Time
}
