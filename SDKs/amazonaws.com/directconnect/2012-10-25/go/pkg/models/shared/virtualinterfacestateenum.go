package shared

type VirtualInterfaceStateEnum string

const (
	VirtualInterfaceStateEnumConfirming VirtualInterfaceStateEnum = "confirming"
	VirtualInterfaceStateEnumVerifying  VirtualInterfaceStateEnum = "verifying"
	VirtualInterfaceStateEnumPending    VirtualInterfaceStateEnum = "pending"
	VirtualInterfaceStateEnumAvailable  VirtualInterfaceStateEnum = "available"
	VirtualInterfaceStateEnumDown       VirtualInterfaceStateEnum = "down"
	VirtualInterfaceStateEnumDeleting   VirtualInterfaceStateEnum = "deleting"
	VirtualInterfaceStateEnumDeleted    VirtualInterfaceStateEnum = "deleted"
	VirtualInterfaceStateEnumRejected   VirtualInterfaceStateEnum = "rejected"
	VirtualInterfaceStateEnumUnknown    VirtualInterfaceStateEnum = "unknown"
)
