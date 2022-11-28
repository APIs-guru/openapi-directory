package shared

type SpotInstanceStateEnum string

const (
	SpotInstanceStateEnumOpen      SpotInstanceStateEnum = "open"
	SpotInstanceStateEnumActive    SpotInstanceStateEnum = "active"
	SpotInstanceStateEnumClosed    SpotInstanceStateEnum = "closed"
	SpotInstanceStateEnumCancelled SpotInstanceStateEnum = "cancelled"
	SpotInstanceStateEnumFailed    SpotInstanceStateEnum = "failed"
)
