package shared

// DeleteFileSystemLustreResponse
// The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
type DeleteFileSystemLustreResponse struct {
	FinalBackupID   *string `json:"FinalBackupId,omitempty"`
	FinalBackupTags []Tag   `json:"FinalBackupTags,omitempty"`
}
