package shared

type ServiceUpdateSeverityEnum string

const (
	ServiceUpdateSeverityEnumCritical  ServiceUpdateSeverityEnum = "critical"
	ServiceUpdateSeverityEnumImportant ServiceUpdateSeverityEnum = "important"
	ServiceUpdateSeverityEnumMedium    ServiceUpdateSeverityEnum = "medium"
	ServiceUpdateSeverityEnumLow       ServiceUpdateSeverityEnum = "low"
)
