package shared



type DeleteFileSystemResponse struct {
    FileSystemID *string `json:"FileSystemId,omitempty"`
    Lifecycle *FileSystemLifecycleEnum `json:"Lifecycle,omitempty"`
    LustreResponse *DeleteFileSystemLustreResponse `json:"LustreResponse,omitempty"`
    WindowsResponse *DeleteFileSystemWindowsResponse `json:"WindowsResponse,omitempty"`
    
}

