package shared

type UserGroup struct {
	Arn               *string
	Engine            *string
	PendingChanges    *UserGroupPendingChanges
	ReplicationGroups []string
	Status            *string
	UserGroupID       *string
	UserIds           []string
}
