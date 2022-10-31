package shared

type BackupTypeEnum string

const (
	BackupTypeEnumAutomatic     BackupTypeEnum = "AUTOMATIC"
	BackupTypeEnumUserInitiated BackupTypeEnum = "USER_INITIATED"
	BackupTypeEnumAwsBackup     BackupTypeEnum = "AWS_BACKUP"
)
