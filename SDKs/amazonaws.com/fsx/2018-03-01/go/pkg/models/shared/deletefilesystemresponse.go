package shared

type DeleteFileSystemResponse struct {
	FileSystemID    *string                          `json:"FileSystemId"`
	Lifecycle       *FileSystemLifecycleEnum         `json:"Lifecycle"`
	LustreResponse  *DeleteFileSystemLustreResponse  `json:"LustreResponse"`
	WindowsResponse *DeleteFileSystemWindowsResponse `json:"WindowsResponse"`
}
