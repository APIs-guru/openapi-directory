package shared

type DeleteFileSystemRequest struct {
	ClientRequestToken   *string                               `json:"ClientRequestToken"`
	FileSystemID         string                                `json:"FileSystemId"`
	LustreConfiguration  *DeleteFileSystemLustreConfiguration  `json:"LustreConfiguration"`
	WindowsConfiguration *DeleteFileSystemWindowsConfiguration `json:"WindowsConfiguration"`
}
