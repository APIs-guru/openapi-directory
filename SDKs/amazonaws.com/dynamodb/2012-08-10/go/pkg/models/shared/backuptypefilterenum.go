package shared

type BackupTypeFilterEnum string

const (
	BackupTypeFilterEnumUser      BackupTypeFilterEnum = "USER"
	BackupTypeFilterEnumSystem    BackupTypeFilterEnum = "SYSTEM"
	BackupTypeFilterEnumAwsBackup BackupTypeFilterEnum = "AWS_BACKUP"
	BackupTypeFilterEnumAll       BackupTypeFilterEnum = "ALL"
)
