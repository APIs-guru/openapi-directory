package shared

// CreateFileSystemResponse
// The response object returned after the file system is created.
type CreateFileSystemResponse struct {
	FileSystem *FileSystem `json:"FileSystem,omitempty"`
}
