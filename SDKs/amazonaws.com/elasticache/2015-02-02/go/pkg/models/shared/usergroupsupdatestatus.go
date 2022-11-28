package shared

// UserGroupsUpdateStatus
// The status of the user group update.
type UserGroupsUpdateStatus struct {
	UserGroupIdsToAdd    []string
	UserGroupIdsToRemove []string
}
