package shared

type ServiceStateEnum string

const (
	ServiceStateEnumPending   ServiceStateEnum = "Pending"
	ServiceStateEnumAvailable ServiceStateEnum = "Available"
	ServiceStateEnumDeleting  ServiceStateEnum = "Deleting"
	ServiceStateEnumDeleted   ServiceStateEnum = "Deleted"
	ServiceStateEnumFailed    ServiceStateEnum = "Failed"
)
