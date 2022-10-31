package shared




type ContainerConditionEnum string

const (
    ContainerConditionEnumStart ContainerConditionEnum = "START"
ContainerConditionEnumComplete ContainerConditionEnum = "COMPLETE"
ContainerConditionEnumSuccess ContainerConditionEnum = "SUCCESS"
ContainerConditionEnumHealthy ContainerConditionEnum = "HEALTHY"
)


