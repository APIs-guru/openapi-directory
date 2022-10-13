package shared

type DeleteFileSystemWindowsResponse struct {
	FinalBackupID   *string `json:"FinalBackupId"`
	FinalBackupTags []Tag   `json:"FinalBackupTags"`
}
