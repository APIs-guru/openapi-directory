package shared

type ConnectionStatusEnum string

const (
	ConnectionStatusEnumPendingHandshake ConnectionStatusEnum = "PENDING_HANDSHAKE"
	ConnectionStatusEnumAvailable        ConnectionStatusEnum = "AVAILABLE"
	ConnectionStatusEnumError            ConnectionStatusEnum = "ERROR"
	ConnectionStatusEnumDeleted          ConnectionStatusEnum = "DELETED"
)
