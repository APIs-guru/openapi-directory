package shared

type InstanceEventWindowStateEnum string

const (
	InstanceEventWindowStateEnumCreating InstanceEventWindowStateEnum = "creating"
	InstanceEventWindowStateEnumDeleting InstanceEventWindowStateEnum = "deleting"
	InstanceEventWindowStateEnumActive   InstanceEventWindowStateEnum = "active"
	InstanceEventWindowStateEnumDeleted  InstanceEventWindowStateEnum = "deleted"
)
