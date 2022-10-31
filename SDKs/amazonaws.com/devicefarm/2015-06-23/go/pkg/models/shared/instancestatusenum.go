package shared




type InstanceStatusEnum string

const (
    InstanceStatusEnumInUse InstanceStatusEnum = "IN_USE"
InstanceStatusEnumPreparing InstanceStatusEnum = "PREPARING"
InstanceStatusEnumAvailable InstanceStatusEnum = "AVAILABLE"
InstanceStatusEnumNotAvailable InstanceStatusEnum = "NOT_AVAILABLE"
)


