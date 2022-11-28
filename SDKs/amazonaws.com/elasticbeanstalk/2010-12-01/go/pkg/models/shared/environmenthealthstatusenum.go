package shared

type EnvironmentHealthStatusEnum string

const (
	EnvironmentHealthStatusEnumNoData    EnvironmentHealthStatusEnum = "NoData"
	EnvironmentHealthStatusEnumUnknown   EnvironmentHealthStatusEnum = "Unknown"
	EnvironmentHealthStatusEnumPending   EnvironmentHealthStatusEnum = "Pending"
	EnvironmentHealthStatusEnumOk        EnvironmentHealthStatusEnum = "Ok"
	EnvironmentHealthStatusEnumInfo      EnvironmentHealthStatusEnum = "Info"
	EnvironmentHealthStatusEnumWarning   EnvironmentHealthStatusEnum = "Warning"
	EnvironmentHealthStatusEnumDegraded  EnvironmentHealthStatusEnum = "Degraded"
	EnvironmentHealthStatusEnumSevere    EnvironmentHealthStatusEnum = "Severe"
	EnvironmentHealthStatusEnumSuspended EnvironmentHealthStatusEnum = "Suspended"
)
