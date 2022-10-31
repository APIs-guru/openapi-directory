package shared

type LifeCycleStateEnum string

const (
	LifeCycleStateEnumCreating  LifeCycleStateEnum = "creating"
	LifeCycleStateEnumAvailable LifeCycleStateEnum = "available"
	LifeCycleStateEnumUpdating  LifeCycleStateEnum = "updating"
	LifeCycleStateEnumDeleting  LifeCycleStateEnum = "deleting"
	LifeCycleStateEnumDeleted   LifeCycleStateEnum = "deleted"
	LifeCycleStateEnumError     LifeCycleStateEnum = "error"
)
