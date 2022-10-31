package shared




type EventClassEnum string

const (
    EventClassEnumInfrastructure EventClassEnum = "INFRASTRUCTURE"
EventClassEnumDeployment EventClassEnum = "DEPLOYMENT"
EventClassEnumSecurityChange EventClassEnum = "SECURITY_CHANGE"
EventClassEnumConfigChange EventClassEnum = "CONFIG_CHANGE"
EventClassEnumSchemaChange EventClassEnum = "SCHEMA_CHANGE"
)


