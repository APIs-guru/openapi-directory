package shared

// DeleteFileSystemWindowsConfiguration
// The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
type DeleteFileSystemWindowsConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags,omitempty"`
	SkipFinalBackup *bool `json:"SkipFinalBackup,omitempty"`
}
