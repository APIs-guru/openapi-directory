package shared

type CreateStorageVirtualMachineRequest struct {
	ActiveDirectoryConfiguration *CreateSvmActiveDirectoryConfiguration            `json:"ActiveDirectoryConfiguration,omitempty"`
	ClientRequestToken           *string                                           `json:"ClientRequestToken,omitempty"`
	FileSystemID                 string                                            `json:"FileSystemId"`
	Name                         string                                            `json:"Name"`
	RootVolumeSecurityStyle      *StorageVirtualMachineRootVolumeSecurityStyleEnum `json:"RootVolumeSecurityStyle,omitempty"`
	SvmAdminPassword             *string                                           `json:"SvmAdminPassword,omitempty"`
	Tags                         []Tag                                             `json:"Tags,omitempty"`
}
