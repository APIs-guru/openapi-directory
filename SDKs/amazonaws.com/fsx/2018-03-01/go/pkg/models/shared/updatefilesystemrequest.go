package shared

type UpdateFileSystemRequest struct {
	ClientRequestToken   *string                               `json:"ClientRequestToken"`
	FileSystemID         string                                `json:"FileSystemId"`
	LustreConfiguration  *UpdateFileSystemLustreConfiguration  `json:"LustreConfiguration"`
	OntapConfiguration   *UpdateFileSystemOntapConfiguration   `json:"OntapConfiguration"`
	StorageCapacity      *int64                                `json:"StorageCapacity"`
	WindowsConfiguration *UpdateFileSystemWindowsConfiguration `json:"WindowsConfiguration"`
}
