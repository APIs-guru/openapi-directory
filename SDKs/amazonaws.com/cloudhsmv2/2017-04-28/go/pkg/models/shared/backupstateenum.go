package shared




type BackupStateEnum string

const (
    BackupStateEnumCreateInProgress BackupStateEnum = "CREATE_IN_PROGRESS"
BackupStateEnumReady BackupStateEnum = "READY"
BackupStateEnumDeleted BackupStateEnum = "DELETED"
BackupStateEnumPendingDeletion BackupStateEnum = "PENDING_DELETION"
)


