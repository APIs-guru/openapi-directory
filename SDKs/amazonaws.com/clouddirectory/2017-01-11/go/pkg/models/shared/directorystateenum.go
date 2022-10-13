package shared

type DirectoryStateEnum string

const (
	DirectoryStateEnumEnabled  DirectoryStateEnum = "ENABLED"
	DirectoryStateEnumDisabled DirectoryStateEnum = "DISABLED"
	DirectoryStateEnumDeleted  DirectoryStateEnum = "DELETED"
)
