package shared



type CreateFileSystemRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemType FileSystemTypeEnum `json:"FileSystemType"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LustreConfiguration *CreateFileSystemLustreConfiguration `json:"LustreConfiguration,omitempty"`
    OntapConfiguration *CreateFileSystemOntapConfiguration `json:"OntapConfiguration,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    StorageCapacity int64 `json:"StorageCapacity"`
    StorageType *StorageTypeEnum `json:"StorageType,omitempty"`
    SubnetIds []string `json:"SubnetIds"`
    Tags []Tag `json:"Tags,omitempty"`
    WindowsConfiguration *CreateFileSystemWindowsConfiguration `json:"WindowsConfiguration,omitempty"`
    
}

