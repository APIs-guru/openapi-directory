package shared

type ModelStatusEnum string

const (
	ModelStatusEnumPendingBuild ModelStatusEnum = "PENDING_BUILD"
	ModelStatusEnumActive       ModelStatusEnum = "ACTIVE"
	ModelStatusEnumExpired      ModelStatusEnum = "EXPIRED"
)
