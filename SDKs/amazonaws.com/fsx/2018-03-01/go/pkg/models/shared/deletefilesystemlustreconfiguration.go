package shared

type DeleteFileSystemLustreConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags,omitempty"`
	SkipFinalBackup *bool `json:"SkipFinalBackup,omitempty"`
}
