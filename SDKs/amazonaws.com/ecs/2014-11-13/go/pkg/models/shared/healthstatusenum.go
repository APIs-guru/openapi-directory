package shared

type HealthStatusEnum string

const (
	HealthStatusEnumHealthy   HealthStatusEnum = "HEALTHY"
	HealthStatusEnumUnhealthy HealthStatusEnum = "UNHEALTHY"
	HealthStatusEnumUnknown   HealthStatusEnum = "UNKNOWN"
)
