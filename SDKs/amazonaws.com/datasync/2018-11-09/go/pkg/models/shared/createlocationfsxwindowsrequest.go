package shared



type CreateLocationFsxWindowsRequest struct {
    Domain *string `json:"Domain,omitempty"`
    FsxFilesystemArn string `json:"FsxFilesystemArn"`
    Password string `json:"Password"`
    SecurityGroupArns []string `json:"SecurityGroupArns"`
    Subdirectory *string `json:"Subdirectory,omitempty"`
    Tags []TagListEntry `json:"Tags,omitempty"`
    User string `json:"User"`
    
}

