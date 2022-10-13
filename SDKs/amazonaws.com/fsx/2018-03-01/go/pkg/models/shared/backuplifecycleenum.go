package shared

type BackupLifecycleEnum string

const (
	BackupLifecycleEnumAvailable    BackupLifecycleEnum = "AVAILABLE"
	BackupLifecycleEnumCreating     BackupLifecycleEnum = "CREATING"
	BackupLifecycleEnumTransferring BackupLifecycleEnum = "TRANSFERRING"
	BackupLifecycleEnumDeleted      BackupLifecycleEnum = "DELETED"
	BackupLifecycleEnumFailed       BackupLifecycleEnum = "FAILED"
	BackupLifecycleEnumPending      BackupLifecycleEnum = "PENDING"
	BackupLifecycleEnumCopying      BackupLifecycleEnum = "COPYING"
)
