package shared

type DeleteFileSystemLustreResponse struct {
	FinalBackupID   *string `json:"FinalBackupId"`
	FinalBackupTags []Tag   `json:"FinalBackupTags"`
}
