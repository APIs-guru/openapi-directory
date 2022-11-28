package shared

type VpnStateEnum string

const (
	VpnStateEnumPending   VpnStateEnum = "pending"
	VpnStateEnumAvailable VpnStateEnum = "available"
	VpnStateEnumDeleting  VpnStateEnum = "deleting"
	VpnStateEnumDeleted   VpnStateEnum = "deleted"
)
