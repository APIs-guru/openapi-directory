package shared

type ArchiveStateEnum string

const (
	ArchiveStateEnumEnabled      ArchiveStateEnum = "ENABLED"
	ArchiveStateEnumDisabled     ArchiveStateEnum = "DISABLED"
	ArchiveStateEnumCreating     ArchiveStateEnum = "CREATING"
	ArchiveStateEnumUpdating     ArchiveStateEnum = "UPDATING"
	ArchiveStateEnumCreateFailed ArchiveStateEnum = "CREATE_FAILED"
	ArchiveStateEnumUpdateFailed ArchiveStateEnum = "UPDATE_FAILED"
)
