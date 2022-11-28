package shared

// CacheParameterGroupStatus
// Status of the cache parameter group.
type CacheParameterGroupStatus struct {
	CacheNodeIdsToReboot    []string
	CacheParameterGroupName *string
	ParameterApplyStatus    *string
}
