package shared

type InstanceStatusEnum string

const (
	InstanceStatusEnumPending     InstanceStatusEnum = "PENDING"
	InstanceStatusEnumActive      InstanceStatusEnum = "ACTIVE"
	InstanceStatusEnumTerminating InstanceStatusEnum = "TERMINATING"
)
