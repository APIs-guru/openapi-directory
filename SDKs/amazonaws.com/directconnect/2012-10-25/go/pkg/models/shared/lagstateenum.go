package shared




type LagStateEnum string

const (
    LagStateEnumRequested LagStateEnum = "requested"
LagStateEnumPending LagStateEnum = "pending"
LagStateEnumAvailable LagStateEnum = "available"
LagStateEnumDown LagStateEnum = "down"
LagStateEnumDeleting LagStateEnum = "deleting"
LagStateEnumDeleted LagStateEnum = "deleted"
LagStateEnumUnknown LagStateEnum = "unknown"
)


