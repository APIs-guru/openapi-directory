package shared

type ConnectionStateEnum string

const (
	ConnectionStateEnumOrdering  ConnectionStateEnum = "ordering"
	ConnectionStateEnumRequested ConnectionStateEnum = "requested"
	ConnectionStateEnumPending   ConnectionStateEnum = "pending"
	ConnectionStateEnumAvailable ConnectionStateEnum = "available"
	ConnectionStateEnumDown      ConnectionStateEnum = "down"
	ConnectionStateEnumDeleting  ConnectionStateEnum = "deleting"
	ConnectionStateEnumDeleted   ConnectionStateEnum = "deleted"
	ConnectionStateEnumRejected  ConnectionStateEnum = "rejected"
	ConnectionStateEnumUnknown   ConnectionStateEnum = "unknown"
)
