package shared

type StartReplicationTaskTypeValueEnum string

const (
	StartReplicationTaskTypeValueEnumStartReplication StartReplicationTaskTypeValueEnum = "start-replication"
	StartReplicationTaskTypeValueEnumResumeProcessing StartReplicationTaskTypeValueEnum = "resume-processing"
	StartReplicationTaskTypeValueEnumReloadTarget     StartReplicationTaskTypeValueEnum = "reload-target"
)
