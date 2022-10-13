package shared

type CreateFileSystemRequest struct {
	ClientRequestToken   *string                               `json:"ClientRequestToken"`
	FileSystemType       FileSystemTypeEnum                    `json:"FileSystemType"`
	KmsKeyID             *string                               `json:"KmsKeyId"`
	LustreConfiguration  *CreateFileSystemLustreConfiguration  `json:"LustreConfiguration"`
	OntapConfiguration   *CreateFileSystemOntapConfiguration   `json:"OntapConfiguration"`
	SecurityGroupIds     []string                              `json:"SecurityGroupIds"`
	StorageCapacity      int64                                 `json:"StorageCapacity"`
	StorageType          *StorageTypeEnum                      `json:"StorageType"`
	SubnetIds            []string                              `json:"SubnetIds"`
	Tags                 []Tag                                 `json:"Tags"`
	WindowsConfiguration *CreateFileSystemWindowsConfiguration `json:"WindowsConfiguration"`
}
