package shared

type CreateStorageVirtualMachineRequest struct {
	ActiveDirectoryConfiguration *CreateSvmActiveDirectoryConfiguration            `json:"ActiveDirectoryConfiguration"`
	ClientRequestToken           *string                                           `json:"ClientRequestToken"`
	FileSystemID                 string                                            `json:"FileSystemId"`
	Name                         string                                            `json:"Name"`
	RootVolumeSecurityStyle      *StorageVirtualMachineRootVolumeSecurityStyleEnum `json:"RootVolumeSecurityStyle"`
	SvmAdminPassword             *string                                           `json:"SvmAdminPassword"`
	Tags                         []Tag                                             `json:"Tags"`
}
