package shared




type BackupTypeEnum string

const (
    BackupTypeEnumUser BackupTypeEnum = "USER"
BackupTypeEnumSystem BackupTypeEnum = "SYSTEM"
BackupTypeEnumAwsBackup BackupTypeEnum = "AWS_BACKUP"
)


