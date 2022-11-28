package shared

type TargetHealthStateEnumEnum string

const (
	TargetHealthStateEnumEnumInitial     TargetHealthStateEnumEnum = "initial"
	TargetHealthStateEnumEnumHealthy     TargetHealthStateEnumEnum = "healthy"
	TargetHealthStateEnumEnumUnhealthy   TargetHealthStateEnumEnum = "unhealthy"
	TargetHealthStateEnumEnumUnused      TargetHealthStateEnumEnum = "unused"
	TargetHealthStateEnumEnumDraining    TargetHealthStateEnumEnum = "draining"
	TargetHealthStateEnumEnumUnavailable TargetHealthStateEnumEnum = "unavailable"
)
