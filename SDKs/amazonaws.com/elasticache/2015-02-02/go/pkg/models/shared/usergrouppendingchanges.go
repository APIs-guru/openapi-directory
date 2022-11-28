package shared

// UserGroupPendingChanges
// Returns the updates being applied to the user group.
type UserGroupPendingChanges struct {
	UserIdsToAdd    []string
	UserIdsToRemove []string
}
