package shared

// DeleteFileSystemWindowsResponse
// The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
type DeleteFileSystemWindowsResponse struct {
	FinalBackupID   *string `json:"FinalBackupId,omitempty"`
	FinalBackupTags []Tag   `json:"FinalBackupTags,omitempty"`
}
