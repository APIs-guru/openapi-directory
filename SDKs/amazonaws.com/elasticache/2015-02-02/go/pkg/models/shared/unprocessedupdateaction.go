package shared

// UnprocessedUpdateAction
// Update action that has failed to be processed for the corresponding apply/stop request
type UnprocessedUpdateAction struct {
	CacheClusterID     *string
	ErrorMessage       *string
	ErrorType          *string
	ReplicationGroupID *string
	ServiceUpdateName  *string
}
