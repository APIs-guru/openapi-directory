package shared

type TableStatusEnum string

const (
	TableStatusEnumCreating TableStatusEnum = "CREATING"
	TableStatusEnumUpdating TableStatusEnum = "UPDATING"
	TableStatusEnumDeleting TableStatusEnum = "DELETING"
	TableStatusEnumActive   TableStatusEnum = "ACTIVE"
)
