package shared

// DeleteFileSystemLustreConfiguration
// The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
type DeleteFileSystemLustreConfiguration struct {
	FinalBackupTags []Tag `json:"FinalBackupTags,omitempty"`
	SkipFinalBackup *bool `json:"SkipFinalBackup,omitempty"`
}
