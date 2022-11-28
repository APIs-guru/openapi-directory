package shared

// UpdateFileSystemRequest
// The request object for the <code>UpdateFileSystem</code> operation.
type UpdateFileSystemRequest struct {
	ClientRequestToken   *string                               `json:"ClientRequestToken,omitempty"`
	FileSystemID         string                                `json:"FileSystemId"`
	LustreConfiguration  *UpdateFileSystemLustreConfiguration  `json:"LustreConfiguration,omitempty"`
	OntapConfiguration   *UpdateFileSystemOntapConfiguration   `json:"OntapConfiguration,omitempty"`
	StorageCapacity      *int64                                `json:"StorageCapacity,omitempty"`
	WindowsConfiguration *UpdateFileSystemWindowsConfiguration `json:"WindowsConfiguration,omitempty"`
}
