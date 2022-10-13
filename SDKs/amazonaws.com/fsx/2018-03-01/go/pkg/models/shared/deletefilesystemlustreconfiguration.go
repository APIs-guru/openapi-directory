package shared

type DeleteFileSystemLustreConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags"`
	SkipFinalBackup *bool `json:"SkipFinalBackup"`
}
