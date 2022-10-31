package shared



type DeleteFileSystemRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    LustreConfiguration *DeleteFileSystemLustreConfiguration `json:"LustreConfiguration,omitempty"`
    WindowsConfiguration *DeleteFileSystemWindowsConfiguration `json:"WindowsConfiguration,omitempty"`
    
}

