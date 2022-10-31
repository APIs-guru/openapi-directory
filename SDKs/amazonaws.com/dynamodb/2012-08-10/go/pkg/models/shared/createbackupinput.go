package shared

type CreateBackupInput struct {
	BackupName string `json:"BackupName"`
	TableName  string `json:"TableName"`
}
