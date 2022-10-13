package shared

type UpdateStorageVirtualMachineRequest struct {
	ActiveDirectoryConfiguration *UpdateSvmActiveDirectoryConfiguration `json:"ActiveDirectoryConfiguration"`
	ClientRequestToken           *string                                `json:"ClientRequestToken"`
	StorageVirtualMachineID      string                                 `json:"StorageVirtualMachineId"`
	SvmAdminPassword             *string                                `json:"SvmAdminPassword"`
}
