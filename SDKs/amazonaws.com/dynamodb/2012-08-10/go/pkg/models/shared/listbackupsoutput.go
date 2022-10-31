package shared



type ListBackupsOutput struct {
    BackupSummaries []BackupSummary `json:"BackupSummaries,omitempty"`
    LastEvaluatedBackupArn *string `json:"LastEvaluatedBackupArn,omitempty"`
    
}

