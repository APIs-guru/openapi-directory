package shared




type ContainerInstanceStatusEnum string

const (
    ContainerInstanceStatusEnumActive ContainerInstanceStatusEnum = "ACTIVE"
ContainerInstanceStatusEnumDraining ContainerInstanceStatusEnum = "DRAINING"
ContainerInstanceStatusEnumRegistering ContainerInstanceStatusEnum = "REGISTERING"
ContainerInstanceStatusEnumDeregistering ContainerInstanceStatusEnum = "DEREGISTERING"
ContainerInstanceStatusEnumRegistrationFailed ContainerInstanceStatusEnum = "REGISTRATION_FAILED"
)


