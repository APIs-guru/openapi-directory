package shared

type ServiceUpdateStatusEnum string

const (
	ServiceUpdateStatusEnumAvailable ServiceUpdateStatusEnum = "available"
	ServiceUpdateStatusEnumCancelled ServiceUpdateStatusEnum = "cancelled"
	ServiceUpdateStatusEnumExpired   ServiceUpdateStatusEnum = "expired"
)
