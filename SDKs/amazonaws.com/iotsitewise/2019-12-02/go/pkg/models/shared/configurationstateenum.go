package shared

type ConfigurationStateEnum string

const (
	ConfigurationStateEnumActive           ConfigurationStateEnum = "ACTIVE"
	ConfigurationStateEnumUpdateInProgress ConfigurationStateEnum = "UPDATE_IN_PROGRESS"
	ConfigurationStateEnumUpdateFailed     ConfigurationStateEnum = "UPDATE_FAILED"
)
