package shared

type ListBackupsOutput struct {
	BackupSummaries        []BackupSummary `json:"BackupSummaries"`
	LastEvaluatedBackupArn *string         `json:"LastEvaluatedBackupArn"`
}
