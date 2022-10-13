package shared

type DeleteFileSystemWindowsConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags"`
	SkipFinalBackup *bool `json:"SkipFinalBackup"`
}
