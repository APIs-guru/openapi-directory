package shared



type LambdaDeviceMount struct {
    AddGroupOwner *bool `json:"addGroupOwner,omitempty"`
    Path string `json:"path"`
    Permission *LambdaFilesystemPermissionEnum `json:"permission,omitempty"`
    
}

