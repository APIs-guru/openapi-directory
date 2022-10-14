package shared

type DeleteFileSystemWindowsResponse struct {
	FinalBackupID   *string `json:"FinalBackupId,omitempty"`
	FinalBackupTags []Tag   `json:"FinalBackupTags,omitempty"`
}
