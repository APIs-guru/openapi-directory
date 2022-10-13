package shared

type JobConfigTypeEnum string

const (
	JobConfigTypeEnumCheckConnectionSource      JobConfigTypeEnum = "check_connection_source"
	JobConfigTypeEnumCheckConnectionDestination JobConfigTypeEnum = "check_connection_destination"
	JobConfigTypeEnumDiscoverSchema             JobConfigTypeEnum = "discover_schema"
	JobConfigTypeEnumGetSpec                    JobConfigTypeEnum = "get_spec"
	JobConfigTypeEnumSync                       JobConfigTypeEnum = "sync"
	JobConfigTypeEnumResetConnection            JobConfigTypeEnum = "reset_connection"
)
