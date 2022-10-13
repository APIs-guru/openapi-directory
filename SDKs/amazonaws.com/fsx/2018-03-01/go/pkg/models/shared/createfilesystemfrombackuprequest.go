package shared

type CreateFileSystemFromBackupRequest struct {
	BackupID             string                                `json:"BackupId"`
	ClientRequestToken   *string                               `json:"ClientRequestToken"`
	KmsKeyID             *string                               `json:"KmsKeyId"`
	LustreConfiguration  *CreateFileSystemLustreConfiguration  `json:"LustreConfiguration"`
	SecurityGroupIds     []string                              `json:"SecurityGroupIds"`
	StorageType          *StorageTypeEnum                      `json:"StorageType"`
	SubnetIds            []string                              `json:"SubnetIds"`
	Tags                 []Tag                                 `json:"Tags"`
	WindowsConfiguration *CreateFileSystemWindowsConfiguration `json:"WindowsConfiguration"`
}
