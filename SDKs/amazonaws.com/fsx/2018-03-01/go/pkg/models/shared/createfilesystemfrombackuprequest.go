package shared



type CreateFileSystemFromBackupRequest struct {
    BackupID string `json:"BackupId"`
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LustreConfiguration *CreateFileSystemLustreConfiguration `json:"LustreConfiguration,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    StorageType *StorageTypeEnum `json:"StorageType,omitempty"`
    SubnetIds []string `json:"SubnetIds"`
    Tags []Tag `json:"Tags,omitempty"`
    WindowsConfiguration *CreateFileSystemWindowsConfiguration `json:"WindowsConfiguration,omitempty"`
    
}

