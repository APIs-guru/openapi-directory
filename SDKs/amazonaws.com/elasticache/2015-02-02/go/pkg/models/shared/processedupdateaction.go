package shared

// ProcessedUpdateAction
// Update action that has been processed for the corresponding apply/stop request
type ProcessedUpdateAction struct {
	CacheClusterID     *string
	ReplicationGroupID *string
	ServiceUpdateName  *string
	UpdateActionStatus *UpdateActionStatusEnum
}
