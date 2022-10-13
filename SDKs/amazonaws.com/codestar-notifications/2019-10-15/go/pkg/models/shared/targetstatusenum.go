package shared

type TargetStatusEnum string

const (
	TargetStatusEnumPending     TargetStatusEnum = "PENDING"
	TargetStatusEnumActive      TargetStatusEnum = "ACTIVE"
	TargetStatusEnumUnreachable TargetStatusEnum = "UNREACHABLE"
	TargetStatusEnumInactive    TargetStatusEnum = "INACTIVE"
	TargetStatusEnumDeactivated TargetStatusEnum = "DEACTIVATED"
)
